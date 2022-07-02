import { useEffect, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import UserList from './UserList';
import { RevolvingDot } from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const UserResult = () => {
	const { users, loading, fetchUser } = useContext(GithubContext);

	useEffect(() => {
		fetchUser();
	}, []);

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
