import PadecimientosService from '../../../services/padecimientos.service';
import actions from './padecimientos.actions';

export const loadPadecimientosAsync = () => (dispatch) => {
    dispatch(actions.padecimientosLoadStart());

    PadecimientosService.getAllPadecimientos()
    .then((response) => dispatch(actions.padecimientosLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.padecimientosLoadError(error.message)));
};