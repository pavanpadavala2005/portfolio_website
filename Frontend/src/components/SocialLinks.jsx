import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = () => {
	const socialLinks = [
		{
			icon: Github,
			href: "https://github.com/pavanpadavala2005",
			label: "GitHub",
			isDisabled: false,
		},
		{
			icon: Linkedin,
			href: "https://www.linkedin.com/in/pavan-kumar-886a9032a/",
			label: "LinkedIn",
			isDisabled: false,
		},
		{ icon: Twitter, href: "#", label: "Twitter", isDisabled: true },
		{
			icon: Mail,
			href: "https://mail.google.com/mail/?view=cm&fs=1&to=pavankumarpadavala123@gmail.com",
			label: "Email",
			isDisabled: false,
		},
	];

	return (
		<footer
			id="Social_Links"
			className="py-6 md:py-8 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-500 text-white">
			<div className="flex flex-col items-center justify-center gap-3 md:gap-4">
				<p className="text-sm md:text-lg font-semibold tracking-wide">Social Links</p>

				<div className="flex space-x-4 md:space-x-8">
					{socialLinks.map((link) => (
						<a
							key={link.label}
							onClick={(e) => {
								e.preventDefault();
								if (!link.isDisabled) {
									window.open(link.href, "_blank", "noopener,noreferrer");
								}
							}}
							className={`relative group cursor-pointer ${
								link.isDisabled ? "opacity-50 cursor-not-allowed" : ""
							}`}
							aria-label={link.label}>
							<div
								className={`p-2 md:p-3 rounded-full bg-white/20 transition-all duration-300 shadow-md 
							${link.isDisabled ? "" : "hover:bg-white/30 hover:shadow-lg"}`}>
								<link.icon
									className={`w-5 h-5 md:w-7 md:h-7 text-white transition-all duration-200 
							  ${link.isDisabled ? "" : "group-hover:scale-110"}`}
								/>
							</div>
						</a>
					))}
				</div>

				<p className="text-xs md:text-sm opacity-80 mt-2">
					&copy; {new Date().getFullYear()}. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default socialLinks;
