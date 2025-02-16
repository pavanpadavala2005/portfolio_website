import { useSelector } from "react-redux";
import { EducationalData } from "../provider/dataSlice";
const EducationSection = () => {
	const educationData = useSelector(EducationalData);
	return (
		<section
			id="Education"
			className="w-full max-w-screen-2xl mx-auto bg-gradient-to-t from-indigo-100 via-white to-purple-100 overflow-hidden">
			<div className="w-full max-w-screen-lg mx-auto py-5">
				<h1 className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-800">
					Education Details
				</h1>

				<div className="relative">
					{/* Timeline line */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
					<div className="md:hidden absolute left-6 h-full w-0.5 bg-gray-200"></div>

					{/* Timeline items */}
					<div className="space-y-6 md:space-y-3 px-4 md:px-6">
						{educationData.map((item, index) => (
							<div
								key={item.id}
								className="timeline-item relative flex md:items-center">
								{/* Desktop layout */}
								<div
									className={`hidden md:block w-1/2 ${
										index % 2 === 0 ? "pr-10 text-right" : "pl-10 ml-auto"
									}`}>
									{index % 2 === 0 && (
										<div className="p-6 bg-white rounded-lg shadow-lg">
											<div className="text-sm text-blue-600 font-semibold">
												{item.year}
											</div>
											<div className="flex gap-2 mt-1 font-bold justify-end items-center">
												<p className="text-lg">{item.degree}</p>
												<p className="">|</p>
												<p className="text-sm tracking-wide">
													{item.percentage}
												</p>
											</div>
											<h3 className="text-base font-bold text-gray-700 mt-2">
												{item.institution}
											</h3>
										</div>
									)}
								</div>

								{/* Timeline dot */}
								<div className="absolute md:left-1/2 left-2.5 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></div>

								{/* Desktop layout - right side */}
								<div
									className={`hidden md:block w-1/2 ${
										index % 2 === 1 ? "pl-10" : "pl-10"
									}`}>
									{index % 2 === 1 && (
										<div className="p-6 bg-white rounded-lg shadow-lg">
											<div className="text-sm text-blue-600 font-semibold">
												{item.year}
											</div>
											<div className="flex gap-2 mt-1 font-bold items-center">
												<p className="text-lg">{item.degree}</p>
												<p className="">|</p>
												<p className="text-sm tracking-wide">
													{item.percentage}
												</p>
											</div>
											<h3 className="text-base font-bold text-gray-700 mt-2">
												{item.institution}
											</h3>
										</div>
									)}
								</div>

								{/* Mobile layout */}
								<div className="w-full md:hidden ml-14">
									<div className=" px-4 py-2 bg-white rounded-lg shadow-lg">
										<div className="text-xs flex gap-2 items-center font-semibold">
											<p className="text-blue-600">{item.year}</p>
											<p> | </p>
											<p className="tracking-wide">{item.percentage}</p>
										</div>
										<div className="text-base font-bold text-gray-700 mt-1">
											{item.degree}
										</div>
										<h3 className="text-xs font-medium text-gray-800 mt-2">
											{item.institution}
										</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default EducationSection;
