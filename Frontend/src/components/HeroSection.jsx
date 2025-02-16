import { lazy } from "react";

const PrimaryButton = lazy(() => import("../utils/PrimaryButton"));

const HeroSection = () => {
	const openResume = () => {
		window.open("/RESUME.pdf", "_blank");
	};
	return (
		<section
			id="Home"
			className="w-full py-20 md:py-40 px-4 bg-gradient-to-t from-purple-100 via-white to-indigo-100">
			<div className="w-full max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:px-6">
				<div className="flex flex-col w-full md:w-3/5 py-4 md:py-10 gap-1 md:gap-6 text-center md:text-left">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900">Hi, I'm Pavan</h1>
					<span className="block text-lg md:text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text tracking-wider font-semibold text-transparent">
						Recent Graduate
					</span>
					<p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
						Passionate Computer Science Engineering student. Proficient in MERN stack,
						RESTful APIs, and scalable app development. Skilled in problem-solving,
						performance optimization, and innovation-driven learning.
					</p>
					<div className="py-4">
						<PrimaryButton name={"Resume"} onClick={openResume} />
					</div>
				</div>
				<div className="w-56 md:w-4/12 flex justify-center md:p-4">
					<img
						src="/PAVAN.jpg"
						alt="Pavan's portrait"
						className="w-full object-cover object-center md:aspect-[3/4] rounded-lg shadow-lg brightness-[100%]"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
