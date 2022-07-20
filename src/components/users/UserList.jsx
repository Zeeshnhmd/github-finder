import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

const UserList = ({ person: { login, avatar_url } }) => {
	const { loading } = useContext(GithubContext);

	return (
		<div className="card shadow-md compact side bg-secondary transform transition duration-500 hover:scale-105">
			<div className="flex-row items-center space-x-4 card-body">
				<div className="avatar">
					<div className="rounded-full shadow w-14 h-14">
						{loading ? (
							<Skeleton
								animation="wave"
								variant="circular"
								width={50}
								height={50}
							/>
						) : (
							<img src={avatar_url} alt="avatar" />
						)}
					</div>
				</div>
				<div>
					<h1 className="pb-1 text-neutral card-title">
						{loading ? (
							<Skeleton
								variant="wave"
								height={13}
								width={100}
								style={{ marginBottom: 6 }}
							/>
						) : (
							login
						)}
					</h1>
					<Link className="text-neutral" to={`/user/${login}`}>
						{loading ? (
							<Skeleton
								variant="wave"
								height={10}
								width={50}
								style={{ marginBottom: 6 }}
							/>
						) : (
							'Visit Profile'
						)}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserList;
