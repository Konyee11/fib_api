import express from "express";
import helloRouter from "./routes/helloRoute";
import fibonacciRouter from "./routes/fibonacciRoute";

const app = express();

app.use("/hello", helloRouter);
app.use("/fibonacci", fibonacciRouter);

export default app;
