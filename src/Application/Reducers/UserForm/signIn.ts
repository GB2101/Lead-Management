import { SignIn, SET_USER, SET_PASSWORD, SET_CONFIRMATION } from '../../Actions/UserForm';
import { password_validation as validation } from '../../functions/password_validation';

interface SignInForm {
	username?: string;
	password?: string;
	confirmation?: string;

	requirements: {
		completed: boolean;
		confirmed: boolean;

		password: {
			length: boolean;
			special: boolean;
			number: boolean;
			alfa: boolean;
		}
	}
}

const InitialState: SignInForm = {
	requirements: {
		completed: false,
		confirmed: false,

		password: {
			length: false,
			special: false,
			number: false,
			alfa: false,
		},
	},
};

const reducer = (state: SignInForm = InitialState, action: SignIn): SignInForm => {
	switch (action.type) {
		case SET_USER: {
			const { username } = action.payload;
			const { password, confirmation } = state;

			let completed = true;

			!username ? completed = false : '';
			!password ? completed = false : '';
			!confirmation ? completed = false : '';

			return {
				...state,
				username,
				requirements: {
					...state.requirements,
					completed,
				},
			};
		}

		case SET_PASSWORD: {
			const { password } = action.payload;
			const { username, confirmation } = state;

			let completed = true;

			!username ? completed = false : '';
			!password ? completed = false : '';
			!confirmation ? completed = false : '';

			const validated = validation(password);

			return {
				...state,
				password,
				requirements: {
					...state.requirements,
					completed,
					password: validated,
				},
			};
		}

		case SET_CONFIRMATION: {
			const { confirmation } = action.payload;
			const { username, password } = state;

			let completed = true;

			!username ? completed = false : 'teste';
			!password ? completed = false : '';
			!confirmation ? completed = false : '';

			const confirmed = confirmation === password;

			return {
				...state,
				confirmation,
				requirements: {
					...state.requirements,
					completed,
					confirmed,
				},
			};
		}

		default: {
			return state;
		}
	}
};

export default reducer;
