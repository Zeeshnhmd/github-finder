import React from 'react';

const About = () => {
	return (
		<div className="text-primary-content">
			<h1 class="text-3xl font-bold mb-6">About GitHub Explorer</h1>
			<p class="text-lg mb-4">
				Welcome to GitHub Explorer, a feature-rich web application designed for
				the avid GitHub enthusiast. Our platform provides a seamless experience
				for users looking to explore GitHub profiles, discover repositories, and
				gain insights into the collaborative world of open-source development.
			</p>
			<div class="mb-6">
				<h2 class="text-xl font-bold mb-2">What We Offer</h2>
				<ul class="list-disc pl-6">
					<li>
						Navigate through a vast array of GitHub profiles effortlessly.
					</li>
					<li>
						Discover in-depth information about repositories hosted on GitHub.
					</li>
					<li>
						Uncover the connections within the GitHub community by exploring the
						followers and following lists of individual profiles.
					</li>
				</ul>
			</div>{' '}
			<div class="mb-6">
				<h2 class="text-xl font-bold mb-2">Technology Stack</h2>
				<ul class="list-disc pl-6">
					<li>
						<strong>ReactJS:</strong> A powerful JavaScript library for building
						user interfaces.
					</li>
					<li>
						<strong>Tailwind CSS:</strong> A utility-first CSS framework that
						facilitates quick and intuitive styling.
					</li>
					<li>
						<strong>Daisy UI:</strong> Enhances the user interface with Vue.js
						components.
					</li>
					<li>
						<strong>React Router:</strong> Enables seamless navigation within
						the application.
					</li>
					<li>
						<strong>GitHub API:</strong> Utilizes the GitHub API to fetch
						real-time data.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
