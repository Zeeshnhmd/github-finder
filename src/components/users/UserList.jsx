import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ person: { login, avatar_url } }) => {
	return (
		<div className="card shadow-md compact side bg-base-100  transform transition duration-500 hover:scale-105">
			<div className="flex-row items-center space-x-4 card-body">
				<div className="avatar">
					<div className="rounded-full shadow w-14 h-14">
						<img src={avatar_url} alt="avatar" />
					</div>
				</div>
				<div>
					<h1 className="card-title pb-1">{login}</h1>
					<Link
						className="text-base-content text-opacity-40"
						to={`/user/${login}`}
					>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserList;
