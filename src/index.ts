import express, { Application, Request, Response } from "express";
import cors from "cors"
import { EventsRouter } from "./routers/events.router";

const PORT: number = 8000

const app : Application = express()
app.use(express.json());
app.use(cors());

const eventsRouter = new EventsRouter()

app.use("/api/events", eventsRouter.getRouter())

app.get("/api", ( req : Request, res: Response ) => {
    res.status(200).send("if this text appear, your API is tunning");
});

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
