import mongoose from "mongoose";

const receiveMailSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		isPinned: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const MailBox = mongoose.model("MailBox", receiveMailSchema);

export default MailBox;
