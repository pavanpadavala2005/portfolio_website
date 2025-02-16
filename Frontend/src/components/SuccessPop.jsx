import { useCallback, useEffect } from "react";

const SuccessPop = ({ isOpen, setIsOpen, name }) => {
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
			setTimeout(() => {
				handleClose();
				document.body.style.overflow = "auto";
			}, 6000);
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
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden p-6 text-center">
				<h2 className="text-2xl font-semibold text-gray-800">
					Thanks You <span className="font-bold text-black">{name}</span>
				</h2>
				<p className="text-gray-600 font-semibold mt-2">
					It means a lot to me, I once again Thanks a lot...
				</p>
				<button
					className="mt-6 text-sm  md:text-base px-2 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 duration-300 shadow-lg hover:shadow-indigo-500/2 rounded-md hover:bg-blue-700 transition"
					onClick={(e) => {
						e.preventDefault();
						handleClose();
					}}>
					Close
				</button>
			</div>
		</div>
	);
};

export default SuccessPop;
