"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const events_router_1 = require("./routers/events.router");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_router_1 = require("./routers/auth.router");
const user_router_1 = require("./routers/user.router");
const transaction_router_1 = require("./routers/transaction.router");
const promotor_router_1 = require("./routers/promotor.router");
const reviews_router_1 = require("./routers/reviews.router");
const callback_router_1 = require("./routers/callback.router");
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.BASE_URL_FE,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));
app.use((0, cookie_parser_1.default)());
app.get("/api", (req, res) => {
    res.status(200).send("if this text appear, your API is tunning");
});
const userRouter = new user_router_1.UserRouter();
const eventsRouter = new events_router_1.EventsRouter();
const authRouter = new auth_router_1.AuthRouter();
const promotorRouter = new promotor_router_1.PromotorRouter();
const transactionRouter = new transaction_router_1.TransactionRouter();
const reviewRouter = new reviews_router_1.ReviewsRouter();
const callbackRouter = new callback_router_1.CallbackRouter();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/promotor", promotorRouter.getRouter()); // Menambahkan rute untuk promotor
app.use("/api/events", eventsRouter.getRouter());
app.use("/api/transaction", transactionRouter.getRouter());
app.use("/api/review", reviewRouter.getRouter());
app.use("/api/callback", callbackRouter.getRouter());
app.post("/api", (req, res) => {
    res.send("POST request received");
});
app.listen(PORT, () => {
    console.log(`Server is running on => http://localhost:${PORT}/api`);
});
