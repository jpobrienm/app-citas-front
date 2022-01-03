import { combineReducers } from 'redux';
import citasReducer from './citas/citas.reducer';
import padecimientosReducer from './padecimientos/padecimientos.reducer';

const rootReducer = () =>
	combineReducers({
		citas: citasReducer,
		padecimientos: padecimientosReducer,
	});

export default rootReducer;