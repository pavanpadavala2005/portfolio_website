import { Mail, MapPin, Phone } from "lucide-react";
import { lazy, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitMail } from "../provider/dataSlice";
const SuccessPop = lazy(() => import("./SuccessPop"));
const GetInTouch = () => {
	const dispatch = useDispatch();
	const { loading, success, error } = useSelector((state) => state.data);
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleReceiveMail = (e) => {
		e.preventDefault();
		if (formData.name === "" || formData.email === "" || formData.message === "") {
			return;
		}

		dispatch(submitMail(formData));
		setFormData({
			name: "",
			email: "",
			message: "",
		});
		setIsOpen(true);
	};

	return (
		<section
			id="Hire_Me"
			className="w-full py-16 max-w-screen-2xl mx-auto bg-gradient-to-b from-indigo-100 via-white to-violet-100">
			<div className="w-full max-w-screen-lg mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
					Hire Me
				</h2>
				<div className="grid md:grid-cols-9 gap-10">
					<div className="col-span-4 space-y-3 md:space-y-8">
						<h3 className="text-xl md:text-2xl font-semibold text-gray-900">
							Let's Connect
						</h3>
						<p className="text-gray-600">
							I'm always interested in hearing about new projects and opportunities.
							Feel free to reach out!
						</p>
						<div className="space-y-5 md:space-y-6">
							{[
								{
									icon: Mail,
									label: "Email",
									value: "pavankumarpadavala123@gmail.com",
								},
								{ icon: Phone, label: "Phone", value: "+91 93982 17226" },
								{
									icon: MapPin,
									label: "Location",
									value: "Chirala, Andhra Pradesh",
								},
							].map(({ icon: Icon, label, value }) => (
								<div key={label} className="flex items-center space-x-4">
									<div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200">
										<Icon className="text-indigo-600 w-5 h-5 md:w-6 md:h-6 hover:scale-[115%] duration-200" />
									</div>
									<div>
										<h4 className="font-medium text-gray-900">{label}</h4>
										<p className="text-indigo-600">{value}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="w-full flex items-center justify-center md:col-span-1">
						<p className="font-bold text-lg">Or</p>
					</div>

					<div className="col-span-4 bg-white p-6 md:p-8 rounded-lg shadow-lg">
						<form className="space-y-4">
							{["Name", "Email"].map((field) => (
								<div key={field}>
									<label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
										{field}
									</label>
									<input
										type={field === "Email" ? "email" : "text"}
										name={field.toLowerCase()}
										value={formData[field.toLowerCase()]}
										onChange={handleChange}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
										placeholder={`Your ${field.toLowerCase()}`}
										required
									/>
								</div>
							))}
							<div>
								<label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent h-28 md:h-32"
									placeholder="Your message"
									required></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap rounded-lg"
								onClick={handleReceiveMail}>
								{loading ? "Loading..." : "Mail to Me"}
							</button>
						</form>
					</div>
				</div>
			</div>
			{isOpen && <SuccessPop isOpen={isOpen} setIsOpen={setIsOpen} name={formData.name} />}
		</section>
	);
};

export default GetInTouch;
