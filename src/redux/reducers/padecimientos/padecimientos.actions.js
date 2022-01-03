import actionTypes from './padecimientos.actionTypes';

const padecimientosLoadStart = () => ({
	type: actionTypes.PADECIMIENTOS_LOAD_START,
});

const padecimientosLoadSuccess = (padecimiento) => ({
	type: actionTypes.PADECIMIENTOS_LOAD_SUCCESS,
	payload: padecimiento,
});

const padecimientosLoadError = (errorMessage) => ({
	type: actionTypes.PADECIMIENTOS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	padecimientosLoadStart,
	padecimientosLoadSuccess,
	padecimientosLoadError,
};