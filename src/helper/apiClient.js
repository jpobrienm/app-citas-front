import axios from 'axios';

const apiClient = () => {
	const axiosInstance = axios.create({
		baseURL: "http://localhost:8080",
		responseType: 'json'
	})

	return axiosInstance;
}

export default apiClient;