import { useEffect, useState } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const UserResult = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetchUser();
	}, []);

	const fetchUser = async () => {
		const res = await fetch(`https://api.github.com/users`, {
			headers: {
				Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		});
		const data = await res.json();
		setUsers(data);
		setLoading(false);
	};

	return loading ? (
		<div className="flex justify-center">
			<RevolvingDot color="#ffffff" height={80} width={200} />
		</div>
	) : (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
			{users.map((user) => {
				return <h3>{user.login}</h3>;
			})}
		</div>
	);
};

export default UserResult;
