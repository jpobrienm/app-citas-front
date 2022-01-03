import apiClient from "../helper/apiClient";

class PadecimientosService {
  getAllPadecimientos() {
	return apiClient().get("/padecimientos");
  }
}

export default new PadecimientosService();