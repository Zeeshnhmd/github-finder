import { createContext, useState } from 'react';

const GithubContext = createContext();

// const GITHUB_URL = 'https://api.github.com';
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {
		const res = await fetch(`https://api.github.com/users`, {
			headers: {
				Authorization: `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`,
			},
		});
		const data = await res.json();
		setUsers(data);
		setLoading(false);
	};

	return (
		<GithubContext.Provider value={{ users, loading, fetchUser }}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
