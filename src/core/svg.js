
import { 
    mod,
    normalizeVec2
} from '@/core/math.js';

/*
    Effect similar to distort + transform > roughen in Adobe Illustrator.
*/
export function roughenPath(path, { 
    jaggedFrequency = 10, 
    jaggedAmplitudeX = 6,
    jaggedAmplitudeY = 3
} = {}) {
    const secantSampleDistance = 0.4
    const pathLength = path.getTotalLength();

    let result = '';

    for(let i = 0; i < pathLength; i += jaggedFrequency) {
        const point = path.getPointAtLength(i);

        /* Backward/forward point samples for secant */
        const secSampleB = path.getPointAtLength(mod(i - secantSampleDistance, pathLength));
        const secSampleF = path.getPointAtLength(mod(i + secantSampleDistance, pathLength));

        /* Secant vector pointing from B -> F */
        const secant = normalizeVec2([
            secSampleB.x - secSampleF.x,
            secSampleB.y - secSampleF.y ]);

        /* Approximate tangent line at point */
        const tangent = [
            secant[1],
            -secant[0] ];

        const amplitude =
            jaggedAmplitudeX * tangent[0] ** 2 +
            jaggedAmplitudeY * tangent[1] ** 2;

        const instant = 2 * Math.random() * amplitude - amplitude;
        const newPoint = {
            x: point.x + instant * tangent[0],
            y: point.y + instant * tangent[1]
        };

        if (result.length === 0)
            result = `M${newPoint.x} ${newPoint.y}`;

        result += ` ${newPoint.x} ${newPoint.y}`;
    }

    result += 'Z';

    const newPath = document.createElementNS(
        'http://www.w3.org/2000/svg', 
        'path');
        
    newPath.setAttribute('d', result);
    return newPath;
}

/*
    Creates occasional inward tears along a closed SVG path.
*/
export function tearPath(path, {
    jaggedFrequency = 15,
    jaggedAmplitudeX = 6,
    jaggedAmplitudeY = 0,
    tearChance = 0.2,
    tearWidth = 8
} = {}) {
    const secantSampleDistance = 0.4;
    const pathLength = path.getTotalLength();

    const svgNS = 'http://www.w3.org/2000/svg';

    /* Create a hidden SVG for testing the original shape */
    const testSvg = document.createElementNS(svgNS, 'svg');
    const testPath = document.createElementNS(svgNS, 'path');

    testPath.setAttribute('d', path.getAttribute('d'));
    testPath.style.fillRule = path.isConnected
        ? getComputedStyle(path).fillRule
        : (path.getAttribute('fill-rule') || 'nonzero');

    testPath.style.pointerEvents = 'fill';
    testPath.style.fill = 'black';

    testSvg.style.cssText = `
        position: fixed;
        width: 1px;
        height: 1px;
        opacity: 0;
        overflow: visible;
        pointer-events: none;`;

    testSvg.appendChild(testPath);
    document.body.appendChild(testSvg);

    let result = '';

    for (let i = 0; i < pathLength; i += jaggedFrequency) {
        const point = path.getPointAtLength(i);

        if (result.length === 0)
            result = `M${point.x} ${point.y}`;
        else
            result += ` L${point.x} ${point.y}`;

        /* Occasionally insert a tear between samples */
        if (Math.random() >= tearChance)
            continue;

        const center = i + jaggedFrequency / 2;
        const halfWidth = Math.min(
            tearWidth / 2,
            jaggedFrequency * 0.45
        );

        if (center + halfWidth >= pathLength)
            continue;

        const tearStart = path.getPointAtLength(center - halfWidth);
        const tearEnd = path.getPointAtLength(center + halfWidth);
        const tearCenter = path.getPointAtLength(center);

        /* Backward/forward point samples for secant */
        const secSampleB = path.getPointAtLength(mod(center - secantSampleDistance, pathLength));
        const secSampleF = path.getPointAtLength(mod(center + secantSampleDistance, pathLength));

        /* Secant vector pointing from B -> F */
        const secant = normalizeVec2([
            secSampleB.x - secSampleF.x,
            secSampleB.y - secSampleF.y
        ]);

        /* Approximate normal at tear center */
        const normal = [
            secant[1],
            -secant[0]
        ];

        /* Determine which normal points inward */
        const testDistance = 0.5;

        const testPositive = testPath.isPointInFill({
            x: tearCenter.x + normal[0] * testDistance,
            y: tearCenter.y + normal[1] * testDistance
        });

        const testNegative = testPath.isPointInFill({
            x: tearCenter.x - normal[0] * testDistance,
            y: tearCenter.y - normal[1] * testDistance
        });

        /* Ambiguous geometry: don't create a tear */
        if (testPositive === testNegative)
            continue;

        const direction = testPositive ? 1 : -1;
        const amplitude =
            jaggedAmplitudeX * normal[0] ** 2 +
            jaggedAmplitudeY * normal[1] ** 2;

        if (amplitude <= 0)
            continue;

        const depth = amplitude * (0.5 + Math.random() * 0.5);

        const tearTip = {
            x: tearCenter.x + direction * depth * normal[0],
            y: tearCenter.y + direction * depth * normal[1]
        };

        /* Ensure the tip actually lies inside the shape */
        if (!testPath.isPointInFill(tearTip))
            continue;

        /* Enter the tear, reach its tip, return to the edge */
        result += ` L${tearStart.x} ${tearStart.y}`;
        result += ` L${tearTip.x} ${tearTip.y}`;
        result += ` L${tearEnd.x} ${tearEnd.y}`;
    }

    result += 'Z';

    const newPath = document.createElementNS(svgNS, 'path');
    newPath.setAttribute('d', result);
    
    testSvg.remove();
    return newPath;
}

export function createRectangularBasis(width, height) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', `M 0 0 H ${width} V ${height} H 0 Z`);

    return path;
}