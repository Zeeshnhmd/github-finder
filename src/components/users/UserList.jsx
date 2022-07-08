import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

const UserList = ({ person: { login, avatar_url } }) => {
	const { loading } = useContext(GithubContext);
	return loading ? (
		<div className="card shadow-md compact  bg-secondary">
			<div className="flex-row items-center space-x-4 card-body">
				<Skeleton variant="circular" width={50} height={50} />
				<div className="flex-col w-3/4 ">
					<Skeleton variant="text" width="60%" style={{ marginBottom: 6 }} />
					<Skeleton variant="text" width="30%" />
				</div>
			</div>
		</div>
	) : (
		<div className="card shadow-md compact side bg-secondary transform transition duration-500 hover:scale-105">
			<div className="flex-row items-center space-x-4 card-body">
				<div className="avatar">
					<div className="rounded-full shadow w-14 h-14">
						<img src={avatar_url} alt="avatar" />
					</div>
				</div>
				<div>
					<h1 className="pb-1 text-neutral card-title">{login}</h1>
					<Link className="text-neutral" to={`/user/${login}`}>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserList;
