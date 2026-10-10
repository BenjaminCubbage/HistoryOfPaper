export function mod(n, m) {
    return ((n % m) + m) % m
}

export function normalizeVec2(v2) {
    const coefficient = 1/Math.sqrt(v2[0]*v2[0] + v2[1]*v2[1]);
    return [
        coefficient*v2[0],
        coefficient*v2[1] ];
}