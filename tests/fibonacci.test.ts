import getFibonacci from "../src/fibonacci";

describe("getFibonacci", () => {
    it("should throw an error when n < 1", () => {
        expect(() => getFibonacci(0)).toThrow("nは正の整数で指定してください");
        expect(() => getFibonacci(-5)).toThrow("nは正の整数で指定してください");
    });
    it("should return 1 when n = 1", () => {
        expect(getFibonacci(1)).toBe(BigInt(1));
    });

    it("should return 1 when n = 2", () => {
        expect(getFibonacci(2)).toBe(BigInt(1));
    });

    it("should return 2 when n = 3", () => {
        expect(getFibonacci(3)).toBe(BigInt(2));
    });

    it("should return 3 when n = 4", () => {
        expect(getFibonacci(4)).toBe(BigInt(3));
    });

    it("should correctly calculate a known Fibonacci number", () => {
        // 10番目のフィボナッチ数は 55
        expect(getFibonacci(10)).toBe(BigInt(55));
    });

    it("should handle larger values (e.g., 99)", () => {
        // 99番目のフィボナッチ数
        const fib99 = getFibonacci(99);
        // 期待値: 218922995834555169026
        expect(fib99.toString()).toBe("218922995834555169026");
    });
});
