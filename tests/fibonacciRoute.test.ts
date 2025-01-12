import request from "supertest";
import app from "../src/app";

describe("GET /fib", () => {
    it("should return 400 if n is not provided", async () => {
        const res = await request(app).get("/fib");
        expect(res.status).toBe(400);
        expect(res.body.error).toBe("パラメータnを指定してください");
    });

    it("should return 400 if n is not a positive integer", async () => {
        const res = await request(app).get("/fib?n=0");
        expect(res.status).toBe(400);
        expect(res.body.error).toBe("nは正の整数で指定してください");

        const res2 = await request(app).get("/fib?n=-5");
        expect(res2.status).toBe(400);
        expect(res2.body.error).toBe("nは正の整数で指定してください");

        const res3 = await request(app).get("/fib?n=1.5");
        expect(res3.status).toBe(400);
        expect(res3.body.error).toBe("nは正の整数で指定してください");

        const res4 = await request(app).get("/fib?n=abc");
        expect(res4.status).toBe(400);
        expect(res4.body.error).toBe("nは正の整数で指定してください");
    });

    it("should return the correct Fibonacci number", async () => {
        const res = await request(app).get("/fib?n=5");
        expect(res.status).toBe(200);
        expect(res.body.result).toBe("5");

        const res2 = await request(app).get("/fib?n=99");
        expect(res2.status).toBe(200);
        expect(res2.body.result).toBe("218922995834555169026");
    });
});
