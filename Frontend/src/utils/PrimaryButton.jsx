const PrimaryButton = ({ name, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 md:px-5 py-2 md:py-2 text-sm md:text-base hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-all duration-300 shadow-lg">
			{name}
		</button>
	);
};

export default PrimaryButton;
