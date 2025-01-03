import express, { Application, Request, Response } from "express";
import cors from "cors";
import { EventsRouter } from "./routers/events.router";
import cookieParser from "cookie-parser";
import { AuthRouter } from "./routers/auth.router";
import { UserRouter } from "./routers/user.router";  
import { verifikasiToken } from "./middlewares/verify";  
import { verifyRole } from "./middlewares/verify";  

import { TransactionRouter } from "./routers/transaction.router";
import { PromotorRouter } from "./routers/promotor.router";
import { ReviewsRouter } from "./routers/reviews.router";
import { CallbackRouter } from "./routers/callback.router";

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
const reviewRouter = new ReviewsRouter();
const callbackRouter = new CallbackRouter()

app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/promotor", promotorRouter.getRouter());  // Menambahkan rute untuk promotor
app.use("/api/events", eventsRouter.getRouter());
app.use("/api/transaction", transactionRouter.getRouter());
app.use("/api/review", reviewRouter.getRouter());
app.use("/api/callback", callbackRouter.getRouter());

app.post("/api", (req: Request, res: Response) => {
  res.send("POST request received");
  
});

app.listen(PORT, () => {
  console.log(`Server is running on => http://localhost:${PORT}/api`);
});
