export function areCloseValues(a: number, b: number, accuracy: number): boolean {
    if (accuracy === 0) return a === b;
    if (Math.abs(a) < 1 / accuracy) return Math.abs(a - b) <= 10;
    const res = Math.abs(a / b - 1) < accuracy;
    if (!res) {
        console.log("Expected close: ", a, b, accuracy);
    }
    return res;
}
