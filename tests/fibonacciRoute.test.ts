import request from "supertest";
import app from "../src/app";

describe("GET /fib", () => {
    it("クエリパラメータがない場合、400エラーが返る", async () => {
        const res = await request(app).get("/fib");
        expect(res.status).toBe(400);
        expect(res.body.error).toBe("パラメータnを指定してください");
    });
});
