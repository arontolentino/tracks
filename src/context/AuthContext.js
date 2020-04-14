import createDataContext from './createDataContext';

const authReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const signup = (dispatch) => {
	return ({ email, password }) => {
		// Make api request to sign up with email and password
		// If we sign up, modify our state, and say we are authenticated
		// If sign up fails, reflect error message somewhere
	};
};

const signin = (dispatch) => {
	return ({ email, password }) => {
		// Try to sign in
		// Handle succcess by updating sate
		// Handle failure by showing error message
	};
};

const signout = (dispatch) => {
	return () => {
		// Sign out
	};
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup },
	{ isSignedIn: false }
);
