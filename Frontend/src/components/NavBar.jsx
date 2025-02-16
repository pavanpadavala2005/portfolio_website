import { lazy, useState } from "react";
import { Menu, X } from "lucide-react";
const PrimaryButton = lazy(() => import("../utils/PrimaryButton"));

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prev) => {
			const newState = !prev;
			document.body.style.overflow = newState ? "hidden" : "auto";
			return newState;
		});
	};

	return (
		<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300 bg-white/20">
			<div className="w-full max-w-screen-lg mx-auto flex justify-between items-center py-3 px-4">
				<button
					className="md:hidden text-gray-800 focus:outline-none"
					onClick={toggleMenu}
					aria-label={isOpen ? "Close Menu" : "Open Menu"}>
					{isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
				</button>

				<p className="hidden md:block text-3xl font-bold text-gray-900 tracking-wide">
					<a href="#Home">Portfolio</a>
				</p>

				<ul className="hidden md:flex gap-8 text-lg font-medium text-gray-800">
					{[
						{ href: "#Projects", label: "Projects" },
						{ href: "#Education", label: "Education" },
						{ href: "#Skills", label: "Skills" },
						{ href: "#Social_Links", label: "Social Links" },
					].map(({ href, label }) => (
						<li
							key={href}
							className="cursor-pointer hover:scale-105 hover:font-bold transition duration-100">
							<a href={href}>{label}</a>
						</li>
					))}
				</ul>

				<a href="#Hire_Me">
					<PrimaryButton name="Hire Me" />
				</a>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-50">
					<button
						className="absolute top-6 right-6"
						onClick={toggleMenu}
						aria-label="Close Menu">
						<X size={28} />
					</button>

					<ul className="flex flex-col items-center gap-6 text-lg font-semibold text-gray-800">
						{[
							{ href: "#Projects", label: "Projects" },
							{ href: "#Education", label: "Education" },
							{ href: "#Skills", label: "Skills" },
							{ href: "#Social_Links", label: "Social Links" },
						].map(({ href, label }) => (
							<li key={href}>
								<a href={href} onClick={toggleMenu}>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
