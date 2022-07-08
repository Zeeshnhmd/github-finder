import React from 'react';

const Footer = () => {
	const footerYear = new Date().getFullYear();
	return (
		<footer className="footer p-10 bg-primary text-primary-content footer-center">
			<div>
				<p> Copyright &copy; {footerYear} | All right reserved </p>
			</div>
		</footer>
	);
};

export default Footer;
