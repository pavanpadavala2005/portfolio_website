import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { SkillsData } from "../provider/dataSlice";
const CertificatePop = lazy(() => import("./CertificatePop"));

const SkillsSection = () => {
	const skills = useSelector(SkillsData);
	const [activeTab, setActiveTab] = useState("Technical");

	const [isOpen, setIsOpen] = useState(false);
	const [imgUrl, setImgUrl] = useState("");

	const handleImagePopUp = (e, imageLink) => {
		e.preventDefault();
		setIsOpen(true);
		setImgUrl(imageLink);
	};

	return (
		<section
			id="Skills"
			className="w-full max-w-screen-2xl mx-auto bg-gradient-to-b from-indigo-100 via-white to-purple-100 md:py-20">
			<div className="w-full max-w-screen-lg mx-auto py-10 px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
					Skills & Certificates
				</h2>
				<div className="flex justify-center mb-8 flex-wrap gap-5">
					{Object.keys(skills).map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-4 md:px-6 py-2 md:py-2 text-sm md:text-base rounded-md ${
								activeTab === tab
									? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white"
									: "bg-gray-200 text-gray-900 font-semibold"
							}`}>
							{tab.charAt(0).toUpperCase() + tab.slice(1)}
						</button>
					))}
				</div>
				<div className="grid md:grid-cols-2 gap-8 px-4">
					{skills[activeTab]?.map((item) => (
						<div key={item.id} className="bg-white p-4 rounded-lg shadow-xl">
							<div className="flex justify-between items-center text-xs md:text-lg font-semibold">
								<h3>{item.name}</h3>
								<h3>{item.percentage && `${item.percentage}%`}</h3>
							</div>
							{item.percentage !== undefined ? (
								<div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5 mt-2">
									<div
										className={`bg-gradient-to-l from-indigo-600 to-purple-700 h-2 md:h-2.5 rounded-full`}
										style={{ width: `${item.percentage}%` }}></div>
								</div>
							) : (
								<div className="flex justify-between items-center">
									<p className="text-gray-700 mt-2 font-semibold">
										{item.issuer} {item.year && <span> - {item.year}</span>}
									</p>
									<p
										className="text-red-500 text-sm md:text-base font-semibold cursor-pointer hover:scale-105"
										onClick={(e) => handleImagePopUp(e, item.imageLink)}>
										{(item.type === "Certificate" ||
											item.type === "Internship") &&
											"view"}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
			<CertificatePop isOpen={isOpen} setIsOpen={setIsOpen} imageUrl={imgUrl} />
		</section>
	);
};

export default SkillsSection;
