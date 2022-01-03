import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadPadecimientosAsync} from '../redux/reducers/padecimientos/padecimientos.thunks';

const Padecimientos = () => {
	const dispatch = useDispatch();
	const { isLoading, padecimientos, errorMessage } = useSelector((state) => state.padecimientos);

	useEffect(() => {
		dispatch(loadPadecimientosAsync());
	}, []);

	return (
		<div>
			<h1>Lista de Padecimientos</h1>
			{isLoading && <h3>Cargando...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			<table className="table table-bordered table-striped">
				<thead className="thead">
					<tr>
						<th>Identificación Paciente</th>
						<th>Tratamiento</th>
						<th>Padecimiento</th>
					</tr>
				</thead>
				<tbody>
					{padecimientos && padecimientos.map((padecimiento) => (
						<tr key={padecimiento.id}>
							<td>{padecimiento.idPaciente}</td>
							<td>{padecimiento.tratamiento}</td>
							<td>{padecimiento.nombrePadecimiento}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Padecimientos;