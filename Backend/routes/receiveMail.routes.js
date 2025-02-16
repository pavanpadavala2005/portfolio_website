import express from "express";
import {
	receiveMailFromClient,
	getAllMails,
	getSingleMail,
	deleteMail,
	setIsPinned,
} from "../controllers/mailServices.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello from the backend!");
});

router.get("/all", getAllMails);
router.get("/all/:id", getSingleMail);

router.put("/all/:id", setIsPinned);

router.post("/post", receiveMailFromClient);

router.delete("/all/:id", deleteMail);
export default router;
