import actionTypes from "./citas.actionTypes";
import initialState from "./citas.initialStates";

const citasReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case actionTypes.CITAS_LOAD_START:
			return {
				...state,
				isLoading: true,
				citas: null,
				errorMessage: null,
			};
		case actionTypes.CITAS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				citas: payload,
			};
		case actionTypes.CITAS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};

export default citasReducer;