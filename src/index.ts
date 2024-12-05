import express, { Application, Request, Response } from "express";
import cors from "cors"

const PORT: number = 8000

const app : Application = express()
app.use(express.json());
app.use(cors());

app.get("/api", ( req : Request, res: Response ) => {
    res.status(200).send("if this text appear, your API is tunning");
});

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
