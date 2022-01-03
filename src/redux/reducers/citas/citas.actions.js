import actionTypes from './citas.actionTypes';

const citasLoadStart = () => ({
	type: actionTypes.CITAS_LOAD_START,
});

const citasLoadSuccess = (citas) => ({
	type: actionTypes.CITAS_LOAD_SUCCESS,
	payload: citas,
});

const citasLoadError = (errorMessage) => ({
	type: actionTypes.CITAS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	citasLoadStart,
	citasLoadSuccess,
	citasLoadError,
};