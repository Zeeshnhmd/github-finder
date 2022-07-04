import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

import toast from 'react-hot-toast';

const UserSearch = () => {
	const [text, setText] = useState('');

	const { users, searchUsers, clearUsers } = useContext(GithubContext);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		/**
		 * * as it is an form submit so, we have to do e.preventDefault() this will prevent the page from reload
		 */
		e.preventDefault();
		if (text === '') {
			// alert('Please enter something', 'error');
			toast.error('Please enter something');
		} else {
			searchUsers(text);
			/**
			 * * setting the input field back to empty
			 */
			setText('');
		}
	};

	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-10">
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative">
							<input
								type="text"
								className="w-full pr-40 bg-gray-200 input input-lg text-black"
								placeholder="Search"
								value={text}
								onChange={handleChange}
							/>
							<button
								type="submit"
								className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg focus:border-none"
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>

			{/* so here what we are saying is that if their is a user then only show the
			clear button else don't show the clear button */}

			{users.length > 0 && (
				<div>
					<button
						onClick={clearUsers}
						className="btn btn-ghost btn-lg mt-5 lg:ml-5 lg:mt-0"
					>
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
