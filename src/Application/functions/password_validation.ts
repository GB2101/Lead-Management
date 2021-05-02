interface Validation {
	length: boolean,
	special: boolean,
	number: boolean,
	alfa: boolean,
}

const regex_special = /^(?=.*?[#?!@$%^&*._-]).{0,}$/;
const regex_number = /^(?=.*?[0-9]).{0,}$/;
const regex_alfa = /^[a-zA-Z0-9].{0,}$/;

export const password_validation = (password: string): Validation => {
	const length = password.length >= 8;
	const special = password.search(regex_special) >= 0;
	const number = password.search(regex_number) >= 0;
	const alfa = password.search(regex_alfa) >= 0;

	return {
		length,
		special,
		number,
		alfa,
	};
};
