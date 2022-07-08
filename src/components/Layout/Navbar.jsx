import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	return (
		<nav className="navbar mb-12 pt-10 ">
			<div className="container mx-auto flex items-center">
				<div className="flex-none px-2 mx-2">
					<FaGithub className="inline mr-3 text-3xl text-secondary" />
					<Link
						to="/"
						className="text-lg font-bold align-middle text-white hover:text-secondary transition-colors"
					>
						{title}
					</Link>
				</div>
				<div className="flex-1 px-2 mx-2">
					<div className="flex justify-end">
						<Link
							to="/"
							className="text-md text-white mr-6 px-4 py-2 hover:bg-accent rounded transition duration-150"
						>
							Home
						</Link>
						<Link
							to="/about"
							className="text-md text-white  px-4 py-2 hover:bg-accent rounded transition duration-150"
						>
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'GitHub Finder',
};

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;
