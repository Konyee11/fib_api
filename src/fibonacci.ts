/**
 * n番目のフィボナッチ数を取得する
 * @param n 求めたいフィボナッチ数の番号
 * @returns n番目のフィボナッチ数（BigInt型）
 */
const getFibonacci = (n: number): bigint => {
    if (n < 1) {
        throw new Error("nは正の整数で指定してください");
    }

    if (n === 1 || n === 2) {
        return BigInt(1);
    }

    let prev = BigInt(1);
    let current = BigInt(1);

    for (let i = 3; i <= n; i++) {
        const temp = current;
        current = current + prev;
        prev = temp;
    }

    return current;
};

export default getFibonacci;
