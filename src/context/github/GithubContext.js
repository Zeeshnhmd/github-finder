import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

// const GITHUB_URL = 'https://api.github.com';
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	/**
	 * * creating initialState
	 */

	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	/**
	 * * using the (useReducer) hook
	 * * this take in two things 1st is the reducers we are using (githubReducer), and 2nd is intialState
	 */

	const [state, dispatch] = useReducer(githubReducer, initialState);

	/**
	 * * set loading
	 */

	const setLoading = () => {
		dispatch({
			type: 'SET_LOADING',
		});
	};

	/**
	 * * get search users
	 */

	const searchUsers = async (text) => {
		setLoading();

		const params = new URLSearchParams({
			q: text,
		});

		const res = await fetch(`https://api.github.com/search/users?${params}`, {
			headers: {
				Authorization: `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`,
			},
		});
		const { items } = await res.json();

		/**
		 * * we are using the dispatch to dispatch the data
		 * * here we are setting the type, and setting the data as payload (Which we are receiving from the API)
		 * * we can name the payload anything but we are writing (payload) just for the name convention
		 */

		dispatch({
			type: 'GET_USERS',
			payload: items,
		});
	};

	/**
	 * * get single user
	 */

	const getUser = async (login) => {
		setLoading();

		const res = await fetch(`https://api.github.com/users/${login}`, {
			headers: {
				Authorization: `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`,
			},
		});

		if (res.status === 404) {
			window.location = '/notfound';
		} else {
			const data = await res.json();

			dispatch({
				type: 'GET_USER',
				payload: data,
			});
		}
	};

	/**
	 * * get user repos
	 */

	const getRepos = async (login) => {
		setLoading();

		const params = new URLSearchParams({
			sort: 'created',
			per_page: 10,
		});

		const res = await fetch(
			`https://api.github.com/users/${login}/repos?${params}`,
			{
				headers: {
					Authorization: `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`,
				},
			}
		);

		const data = await res.json();

		dispatch({
			type: 'GET_REPOS',
			payload: data,
		});
	};

	/**
	 * * clear users from state
	 */

	const clearUsers = () => {
		dispatch({
			type: 'CLEAR',
		});
	};

	return (
		/**
		 * * and we have to set the values like this
		 */

		<GithubContext.Provider
			value={{
				// users: state.users,
				// loading: state.loading,
				// user: state.user,
				// repos: state.repos,

				// insted of calling all the state as above, we can call all the state like this (Spreading all the states)

				...state,
				searchUsers,
				clearUsers,
				getUser,
				getRepos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
