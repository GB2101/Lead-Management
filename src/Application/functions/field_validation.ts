export const field_validation = (...fields: Array<string | undefined>) =>
	// eslint-disable-next-line
	 fields.reduce((reduced, current) => (current ? reduced : false), true);
