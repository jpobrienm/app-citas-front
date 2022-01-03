import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadCitasAsync} from '../redux/reducers/citas/citas.thunks';

const Citas = () => {
	const dispatch = useDispatch();
	const { isLoading, citas, errorMessage } = useSelector((state) => state.citas);

	useEffect(() => {
		dispatch(loadCitasAsync());
	}, []);

	return (
		<div>
			<h1>Lista de Citas</h1>
			{isLoading && <h3>Cargando...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			<table className="table table-bordered table-striped">
				<thead className="thead">
					<tr>
						<th>Identificación Paciente</th>
						<th>Nombre Paciente</th>
						<th>Nombre Medico</th>
						<th>Fecha</th>
						<th>Hora</th>
						<th>Estado</th>
					</tr>
				</thead>
				<tbody>
					{citas && citas.map((cita) => (
						<tr key={cita.id}>
							<td>{cita.idPaciente}</td>
							<td>{cita.nombrePaciente} {cita.apellidosPaciente}</td>
							<td>{cita.nombreMedico} {cita.apellidosMedico}</td>
							<td>{cita.fechaReservaCita}</td>
							<td>{cita.horaReservaCita}</td>
							<td>{cita.estadoReservaCita ? 'Activa' : 'Cancelada'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Citas;