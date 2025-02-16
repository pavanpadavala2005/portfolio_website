import MailBox from "../models/receiveMail.model.js";

// Create a new mail entry
export const receiveMailFromClient = async (req, res) => {
	if (!req.body || Object.keys(req.body).length === 0) {
		return res.status(400).json({ message: "No data provided" });
	}

	const { name, email, message } = req.body;

	try {
		const newMail = new MailBox({ name, email, message });
		await newMail.save();
		res.status(201).json({ message: "Mail received successfully", data: newMail });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Get all mails
export const getAllMails = async (req, res) => {
	try {
		const mails = await MailBox.find();
		res.status(200).json(mails);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Get a single mail by ID
export const getSingleMail = async (req, res) => {
	try {
		const { id } = req.params; // Fix: Use 'id' instead of 'email'
		const mail = await MailBox.findById(id); // Fix: Use 'MailBox' model

		if (!mail) {
			return res.status(404).json({ message: "Mail not found" });
		}

		res.status(200).json(mail);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteMail = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedMail = await MailBox.findByIdAndDelete(id);

		if (!deletedMail) {
			return res.status(404).json({ message: "Mail not found" });
		}

		res.status(200).json({ message: "Mail deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const setIsPinned = async (req, res) => {
	try {
		const { id } = req.body;

		const mail = await MailBox.findById(id);
		if (!mail) {
			return res.status(404).json({ message: "Mail not found" });
		}

		mail.isPinned = !mail.isPinned;
		await mail.save();

		res.status(200).json({ message: "Mail updated successfully", data: mail });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
