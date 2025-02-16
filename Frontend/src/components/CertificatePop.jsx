import { X } from "lucide-react";
import { useCallback, useEffect } from "react";

const CertificatePop = ({ isOpen, setIsOpen, imageUrl }) => {
	const handleClose = useCallback(() => {
		setIsOpen(false);
		document.body.style.overflow = "auto";
	}, [setIsOpen]);

	const handleKeyDown = useCallback(
		(event) => {
			if (event.key === "Escape") {
				handleClose();
			}
		},
		[handleClose]
	);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "auto";
		};
	}, [isOpen, handleKeyDown]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
			<div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden mx-2 sm:mx-4">
				<button
					onClick={handleClose}
					className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 rounded-full shadow-lg transition-all duration-300 z-10">
					<X className="w-6 h-6" />
				</button>

				<div className="relative w-full overflow-hidden">
					<img
						src={imageUrl}
						alt={imageUrl ? "Certificate Image" : "Image not available"}
						className="w-full h-auto object-contain object-center max-h-[80vh] sm:max-h-[90vh]"
						loading="eager"
					/>
				</div>
			</div>
		</div>
	);
};

export default CertificatePop;
