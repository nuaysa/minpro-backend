import express, { Application, Request, Response } from "express";
import cors from "cors";
import { EventsRouter } from "./routers/events.router";
import cookieParser from "cookie-parser";
import { AuthRouter } from "./routers/auth.router";
import { UserRouter } from "./routers/user.router";
import { TransactionRouter } from "./routers/transaction.router";

const PORT: number = 8000;
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.BASE_URL_FE,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(cookieParser());

app.get("/api", ( req : Request, res: Response ) => {
  res.status(200).send("if this text appear, your API is tunning");
})

const userRouter = new UserRouter();
const eventsRouter = new EventsRouter();
const authRouter = new AuthRouter();
const transactionRouter = new TransactionRouter();

app.use("/api/users", userRouter.getRouter());
app.use("/api/events", eventsRouter.getRouter());
app.use("/api/transaction", transactionRouter.getRouter());

app.use("/api/auth", authRouter.getRouter());
app.use("/api/promotor", promotorRouter.getRouter());  // Menambahkan rute untuk promotor

app.post("/api", (req: Request, res: Response) => {
  res.send("POST request received");
  
});

app.listen(PORT, () => {
  console.log(`Server is running on => http://localhost:${PORT}/api`);
});
