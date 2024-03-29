import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCode, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { RevolvingDot } from 'react-loader-spinner';

import GithubContext from '../context/github/GithubContext';
import RepoList from '../components/repos/RepoList';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const User = () => {
	const { user, getUser, loading, repos, getRepos } = useContext(GithubContext);

	const params = useParams();

	useEffect(() => {
		getUser(params.login);
		getRepos(params.login); //eslint-disable-next-line
	}, []);

	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	return (
		<div>
			{loading ? (
				<div className="flex justify-center">
					<RevolvingDot color="#ffffff" height={100} width={100} />
				</div>
			) : (
				<div className="w-full mx-auto lg:w-10/12">
					<div className="mb-8">
						<Link
							to="/"
							className=" px-4 py-3  hover:bg-accent rounded transition duration-150 text-white"
						>
							Back to Search
						</Link>
					</div>
					<div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
						<div className="custom-card-image mb-6 md:mb-0">
							<div className="rounded-lg shadow-xl card image-full">
								<figure>
									<img
										src={avatar_url}
										alt="userimage"
										className="object-cover"
									/>
								</figure>
								<div className="card-body grid content-end">
									<h2 className="card-title mb-0">{name}</h2>
									<p>{login}</p>
								</div>
							</div>
						</div>

						<div className="col-span-2 ">
							<div className="mb-6">
								<h1 className="text-3xl card-title">
									{name}
									<div className="ml-2 mr-1 badge badge-success">{type}</div>
									{hireable ? (
										<div className="mx-1 badge badge-info"> Hireable</div>
									) : (
										<div className="mx-1 badge badge-info">Not Hireable</div>
									)}
								</h1>
								<p className="mt-3">{bio}</p>
								<div className="mt-4 card-actions">
									<a
										href={html_url}
										target="_blank"
										rel="noreferrer"
										className="btn btn-outline"
									>
										Visit Github Profile
									</a>
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
								{location && (
									<div className="stat card shadow-md">
										<h1 className="stat-title text-md">Location</h1>
										<div className="text-lg stat-value text-ellipsis overflow-hidden">
											{location}
										</div>
									</div>
								)}
								{blog && (
									<div className="stat card shadow-md">
										<h1 className="stat-title text-md">Website</h1>
										<a
											href={blog}
											target="_blank"
											rel="noreferrer"
											className="text-lg stat-value text-ellipsis overflow-hidden"
										>
											{blog}
										</a>
									</div>
								)}
								{twitter_username && (
									<div className="stat card shadow-md">
										<h1 className="stat-title text-md">Twitter</h1>
										<a
											href={`https://twitter.com/${twitter_username}`}
											target="_blank"
											rel="noreferrer"
											className="text-lg stat-value text-ellipsis overflow-hidden"
										>
											{twitter_username}
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="w-full py-5 mb-6 rounded-lg shadow-md bg-secondary text-primary stats">
						<div className="stat">
							<div className="stat-figure ">
								<FaUsers className="text-3xl md:text-5xl" />
							</div>
							<div className="pr-5 font-medium">Followers</div>
							<div className="stat-value pr-5 text-3xl md:text-4xl">
								{followers}
							</div>
						</div>
						<div className="stat">
							<div className="stat-figure ">
								<FaUserFriends className="text-3xl md:text-5xl" />
							</div>
							<div className="pr-5 font-medium">Following</div>
							<div className="stat-value pr-5 text-3xl md:text-4xl">
								{following}
							</div>
						</div>
						<div className="stat">
							<div className="stat-figure ">
								<FaCode className="text-3xl md:text-5xl" />
							</div>
							<div className="pr-5 font-medium">Public Repos</div>
							<div className="stat-value pr-5 text-3xl md:text-4xl">
								{public_repos}
							</div>
						</div>
						<div className="stat">
							<div className="stat-figure ">
								<FaStore className="text-3xl md:text-5xl" />
							</div>
							<div className="pr-5 font-medium">Public Gists</div>
							<div className="stat-value pr-5 text-3xl md:text-4xl">
								{public_gists}
							</div>
						</div>
					</div>
					<RepoList repos={repos} />
				</div>
			)}
		</div>
	);
};

export default User;
