import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import mailRoutes from "./routes/receiveMail.routes.js";

dotenv.config();
const app = express();

// const allowedOrigins = [process.env.FRONTEND_URL, process.env.SECOND_FRONTEND_URL];

// app.use(
// 	cors({
// 		origin: function (origin, callback) {
// 			if (!origin || allowedOrigins.includes(origin)) {
// 				callback(null, true);
// 			} else {
// 				callback(new Error("Not allowed by CORS"));
// 			}
// 		},
// 		methods: ["POST"],
// 		credentials: true,
// 	})
// );

app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		methods: ["POST"],
		credentials: true,
	})
);
app.use(express.json());

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server is running on port ${PORT}`);
	connectDB();
});

app.get("/", (req, res) => {
	res.send("Hello this is PAVAN KUMAR PADAVALA BACKEND");
});

app.use("/mail", mailRoutes);
