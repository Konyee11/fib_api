import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    const nParam = req.query.n;
    if (!nParam) {
        res.status(400).json({
            error: "パラメータnを指定してください",
        });
    }

    try {
        res.json({
            message: "フィボナッチ数！",
        });
    } catch (error: unknown) {
        res.status(500).json({
            error: "予期せぬエラーが発生しました",
        });
    }
});

export default router;
