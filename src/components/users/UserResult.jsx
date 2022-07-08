import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import UserList from './UserList';

const UserResult = () => {
	const { users } = useContext(GithubContext);

	return (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
			{users.map((user) => {
				return <UserList key={user.id} person={user} />;
			})}
		</div>
	);
};

export default UserResult;
