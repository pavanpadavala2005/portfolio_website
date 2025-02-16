import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { ProjectsData } from "../provider/dataSlice";
const CertificatePop = lazy(() => import("./CertificatePop"));

const ProjectsSection = () => {
	const projects = useSelector(ProjectsData);

	const [isOpen, setIsOpen] = useState(false);
	const [imgUrl, setImgUrl] = useState("");

	const [loadedProjects, setLoadedProjects] = useState(projects.slice(0, 6));
	const [visibleCount, setVisibleCount] = useState(6);

	const loadMore = () => {
		const newCount = visibleCount + 3;
		setLoadedProjects(projects.slice(0, newCount));
		setVisibleCount(newCount);
	};

	const handleProjectPopUp = (e, img) => {
		e.preventDefault();
		setIsOpen(true);
		setImgUrl(img);
	};
	return (
		<section
			id="Projects"
			className="w-full py-1 md:py-5 max-w-screen-2xl mx-auto bg-gradient-to-t from-indigo-100 via-white to-purple-100">
			<div className="w-full max-w-screen-lg mx-auto px-8 md:px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
					Projects
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{loadedProjects.map((project) => (
						<div
							key={project.id}
							className="bg-white flex flex-col rounded-lg shadow-lg overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								className="w-full aspect-[16/9] object-contain object-center md:h-48 cursor-pointer"
								onClick={(e) => handleProjectPopUp(e, project.image)}
							/>

							<div className="p-4 space-y-4">
								<h3 className="text-base md:text-xl font-bold text-gray-900">
									{project.title}
								</h3>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-2.5 py-1.5 bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-900 rounded-full text-[11px] md:text-xs font-medium">
											{tech}
										</span>
									))}
								</div>
								<div className="flex justify-end">
									<a
										href={project.link}
										target="_blank"
										className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 md:px-4 py-1 md:py-1.5 text-sm md:text-base rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap">
										View Project
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				{visibleCount < projects.length && (
					<div className="flex items-center justify-center pt-6 md:py-6">
						<p
							className="text-sm md:text-base font-semibold tracking-wider text-rose-500 cursor-pointer hover:font-bold"
							onClick={loadMore}>
							Load More
						</p>
					</div>
				)}
			</div>
			<CertificatePop isOpen={isOpen} setIsOpen={setIsOpen} imageUrl={imgUrl} />
		</section>
	);
};

export default ProjectsSection;
