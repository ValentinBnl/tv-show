import axios from "axios";
import { BASE_URL } from "../config";

export class TVShowAPI {
	static async fetchPopulars() {
		const API_KEY = import.meta.env.VITE_API_KEY_PARAM;

		const response = await axios.get(
			`${BASE_URL}tv/popular?api_key=${API_KEY}`
		);

		return response.data.results;
	}
}
