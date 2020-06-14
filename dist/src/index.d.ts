interface String {
    zeroPad: (length: number) => string;
}
interface Number {
    zeroPad: (length: number) => string;
}
interface Date {
    format: (pattern: string) => string;
}
