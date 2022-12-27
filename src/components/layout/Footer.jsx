import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize">
				copyright Kaung Zaw Htet &copy; {year}
			</footer>
		</>
	);
};

export default Footer;
