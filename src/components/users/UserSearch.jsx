import { useState, useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
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
			toast.error('Please enter something');
		} else {
			searchUsers(text);
		}
	};

	const emptyInputAndClearState = () => {
		clearUsers();
		/**
		 * * setting the input field back to empty
		 */
		setText('');
	};

	return (
		<div className="grid justify-items-center mb-9 ">
			<div className="w-full md:w-3/4 lg:w-3/4 xl:w-2/4">
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative ">
							<input
								type="text"
								className="w-full pr-40 bg-accent input input-lg text-white focus:outline-none"
								placeholder="Search"
								value={text}
								onChange={handleChange}
							/>
							{users.length > 0 && (
								<button
									onClick={emptyInputAndClearState}
									className=" absolute top-4 right-40 z-10"
								>
									<AiFillCloseCircle className="text-3xl text-white" />
								</button>
							)}
							<button
								type="submit"
								className="absolute top-0 right-0 rounded-l-none w-36 btn-lg btn focus:border-none bg-secondary text-primary hover:bg-secondary"
							>
								Go
							</button>
						</div>
					</div>
				</form>
			</div>

			{/* so here what we are saying is that if their is a user then only show the
			clear button else don't show the clear button */}

			{/* {users.length > 0 && (
				<div>
					<button
						onClick={clearUsers}
						className="btn btn-ghost btn-lg mt-5 lg:ml-5 lg:mt-0"
					>
						Clear
					</button>
				</div>
			)} */}
		</div>
	);
};

export default UserSearch;
