import axios from "axios";
import type { AlumniResponse } from "../types/alumni";

const SARJANA_API = "https://sarjana-katsgama.dev.ugm.ac.id/api/alumni";
const PASCA_API = "https://pasca-katsgama.dev.ugm.ac.id/api/alumni";

export const alumniService = {
    getSarjanaAlumni: async () => {
        try {
            const response = await axios.get<AlumniResponse>(SARJANA_API);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch Sarjana alumni data:", error);
            return { alumni: [] };
        }
    },

    getPascaAlumni: async () => {
        try {
            const response = await axios.get<AlumniResponse>(PASCA_API);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch Pasca alumni data:", error);
            return { alumni: [] };
        }
    },
};
