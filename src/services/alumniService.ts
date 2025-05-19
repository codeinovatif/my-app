import axios from "axios";
import type { AlumniDetail, AlumniResponse, FiltersResponse } from "../types/alumni";

const SARJANA_API = "https://sarjana-katsgama.dev.ugm.ac.id/api";

interface GetAlumniParams {
    page?: number;
    search?: string;
    prop_id?: string;
    occupation_id?: string;
    angkatan?: string;
    prodi?: string;
}

export const alumniService = {
    getSarjanaAlumni: async (params?: GetAlumniParams) => {
        try {
            const response = await axios.get<AlumniResponse>(`${SARJANA_API}/alumni`, {
                params,
            });
            return response.data;
        } catch (error) {
            console.error("Failed to fetch Sarjana alumni data:", error);
            return { alumni: [] };
        }
    },

    getAlumniById: async (id: string) => {
        try {
            const response = await axios.get<AlumniDetail>(`${SARJANA_API}/alumni/${id}`);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch alumni detail:", error);
            throw error;
        }
    },

    getFilters: async () => {
        try {
            const response = await axios.get<FiltersResponse>(`${SARJANA_API}/filters`);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch filters:", error);
            return {
                provinces: [],
                prodis: [],
                angkatan: [],
                occupations: [],
            };
        }
    },
};
