import { useEffect, useState } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import UserList from './UserList';

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
			<RevolvingDot color="#ffffff" height={100} width={100} />
		</div>
	) : (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
			{users.map((user) => {
				return <UserList key={user.id} person={user} />;
			})}
		</div>
	);
};

export default UserResult;
