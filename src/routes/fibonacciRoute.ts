import { Request, Response, Router } from "express";
import getFibonacci from "../fibonacci";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
    // クエリパラメータnを取得
    const nParam = req.query.n;

    if (!nParam) {
        // クエリパラメータnが指定されていない場合、400エラーを返して終了
        res.status(400).json({
            error: "パラメータnを指定してください",
        });
        return;
    }

    // nParamが文字列であるため、数値に変換する
    const n = Number(nParam);

    if (isNaN(n) || !Number.isInteger(n) || n < 1) {
        // nが正の整数でない場合、400エラーを返す
        res.status(400).json({
            error: "nは正の整数で指定してください",
        });
        return;
    }

    try {
        const result = getFibonacci(n);
        res.json({
            result: result.toString(),
        });
    } catch (error: unknown) {
        res.status(500).json({
            error:
                error instanceof Error
                    ? `予期せぬエラーが発生しました: ${error.message}`
                    : "予期せぬエラーが発生しました",
        });
    }
});

export default router;
