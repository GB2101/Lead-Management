interface LeadTable {
	some?: number;
}

const InitialState: LeadTable = {};

const reducer = (state: LeadTable = InitialState, action: any): LeadTable => state;

export default reducer;
