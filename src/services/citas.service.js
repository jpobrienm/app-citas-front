import apiClient from "../helper/apiClient";

class CitasService {
  getAllCitas() {
	return apiClient().get("/citasReactivas");
  }
}

export default new CitasService();