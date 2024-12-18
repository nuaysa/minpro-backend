import express, { Application, Request, Response } from "express";
import cors from "cors";
import { EventsRouter } from "./routers/events.router";
import cookieParser from "cookie-parser";
import { AuthRouter } from "./routers/auth.router";
import { UserRouter } from "./routers/user.router";
const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

const userRouter = new UserRouter();
const eventsRouter = new EventsRouter();
const authRouter = new AuthRouter();

app.use("/api/users", userRouter.getRouter());
app.use("/api/events", eventsRouter.getRouter());
app.use("/api/auth", authRouter.getRouter());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("if this text appear, your API is tunning");
});

app.listen(PORT, () => {
  console.log(`Server is running on => http://localhost:${PORT}/api`);
});
