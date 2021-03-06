/**
 * * this take two parameters (initialState and action)
 * * and (Action) is going to be an object, which contains type, which will be a string, and if we are sending any data then we are have to send a payload as well.
 *
 */

const githubReducer = (state, action) => {
	/**
	 * * first we will send (action.type)
	 */
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: true,
			};
		case 'CLEAR':
			return {
				...state,
				users: [],
			};
		case 'GET_USER':
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case 'GET_REPOS':
			return {
				...state,
				repos: action.payload,
				loading: false,
			};
		default: {
			return state;
		}
	}
};

export default githubReducer;
