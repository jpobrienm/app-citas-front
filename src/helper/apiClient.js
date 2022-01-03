import axios from 'axios';

const apiClient = () => {
	const axiosInstance = axios.create({
		baseURL: "https://sebas-juanes-citas.herokuapp.com/",
		responseType: 'json'
	})

	return axiosInstance;
}

export default apiClient;