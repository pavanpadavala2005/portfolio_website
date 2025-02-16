import { lazy, Suspense } from "react";

const NavBar = lazy(() => import("./components/NavBar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const GetInTouch = lazy(() => import("./components/GetInTouch"));
const SocialLinks = lazy(() => import("./components/SocialLinks"));
const App = () => {
	return (
		<div className="w-full max-w-screen-2xl mx-auto">
			<Suspense fallback={<div className="text-center py-10">Loading...</div>}>
				<NavBar />
				<HeroSection />
				<EducationSection />
				<SkillsSection />
				<ProjectsSection />
				<GetInTouch />
				<SocialLinks />
			</Suspense>
		</div>
	);
};

export default App;
