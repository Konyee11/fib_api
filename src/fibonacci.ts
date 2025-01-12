/**
 * n番目のフィボナッチ数を取得する関数
 * @param n - 求めたいフィボナッチ数のインデックス (1以上の正の整数)
 * @returns n番目のフィボナッチ数（BigInt型）
 * @throws エラー - nが1未満または整数でない場合
 */
const getFibonacci = (n: number): bigint => {
    if (!Number.isInteger(n) || n < 1) {
        throw new Error(
            `nは正の整数で指定してください: 現在の入力値は ${n} です`
        );
    }

    if (n === 1 || n === 2) {
        return BigInt(1);
    }

    // 初期値
    let prev: bigint = BigInt(1); // (n-2)番目のフィボナッチ数
    let current: bigint = BigInt(1); // (n-1)番目のフィボナッチ数

    // n番目のフィボナッチ数を計算
    for (let i = 3; i <= n; i++) {
        const temp: bigint = current;
        current = current + prev;
        prev = temp;
    }

    return current;
};

export default getFibonacci;
