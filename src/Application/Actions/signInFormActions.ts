export const SET_USER = 'sign_in/set_user';
export const SET_PASSWORD = 'sign_in/set_password';
export const SET_CONFIRMATION = 'sign_in/set_confirmation';

export interface IN_SET_USER {
	type: typeof SET_USER;
	payload: {
		username: string;
	}
}

export interface IN_SET_PASSWORD {
	type: typeof SET_PASSWORD;
	payload: {
		password: string;
	}
}

export interface IN_SET_CONFIRMATION {
	type: typeof SET_CONFIRMATION;
	payload: {
		confirmation: string;
	}
}

export const set_user_signin = (username: string): IN_SET_USER => ({
	type: SET_USER,
	payload: { username },
});

export const set_password_signin = (password: string): IN_SET_PASSWORD => ({
	type: SET_PASSWORD,
	payload: { password },
});

export const set_confirmation_signin = (confirmation: string): IN_SET_CONFIRMATION => ({
	type: SET_CONFIRMATION,
	payload: { confirmation },
});

export type SignInAction = IN_SET_USER | IN_SET_PASSWORD | IN_SET_CONFIRMATION;
