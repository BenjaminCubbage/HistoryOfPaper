
import { 
    mod,
    normalizeVec2
} from '@/core/math.js';

/*
    Effect similar to distort + transform > roughen in Adobe Illustrator.
*/
export function roughenPath(path, { jaggedFrequency = 15, jaggedAmplitude = 6 } = settings) {
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

        const instant = 2 * Math.random() * jaggedAmplitude - jaggedAmplitude;
        const newPoint = {
            x: point.x + instant * tangent[0],
            y: point.y + instant * tangent[1]
        };

        if (result.length === 0) {
            result = `M${newPoint.x} ${newPoint.y}`;
        }

        result += ` ${newPoint.x} ${newPoint.y}`;
    }

    result += 'Z';

    const newPath = document.createElementNS(
        'http://www.w3.org/2000/svg', 
        'path');
        
    console.log(result);
    newPath.setAttribute('d', result);
    return newPath;
}

/*
    Factory to create "tube tv" basis shape (used for parchment border)
*/
export function createParchmentBasis(width, height) {
    const sx = width / 429.58;
    const sy = height / 81.01;

    const start = [413.85, 79.56];

    const curves = [
        [[281.14, 81.49], [148.44, 81.49], [15.73, 79.56]],
        [[11.62, 79.50], [7.44, 77.51], [6.53, 75.12]],
        [[-2.18, 52.04], [-2.18, 28.96], [6.53, 5.89]],
        [[7.44, 3.50], [11.61, 1.51], [15.73, 1.45]],
        [[148.43, -0.48], [281.14, -0.48], [413.85, 1.45]],
        [[417.96, 1.51], [422.14, 3.50], [423.05, 5.89]],
        [[431.75, 28.97], [431.75, 52.05], [423.05, 75.12]],
        [[422.14, 77.51], [417.96, 79.50], [413.85, 79.56]]
    ];

    const point = ([x, y]) => `${x * sx},${y * sy}`;

    const d = [
        `M ${point(start)}`,
        ...curves.map(c => `C ${c.map(point).join(' ')}`),
        'Z'
    ].join(' ');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);

    return path;
}