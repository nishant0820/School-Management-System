"use server"

import { SchoolProps } from "@/components/dashboard/forms/school/school-onboarding-form";

import axios from "axios";

const BASE_API_URL = process.env.API_URL || "";
export const api = axios.create({
    baseURL: BASE_API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

export async function createSchool(data: SchoolProps) {
    try {
        const response = await api.post("/schools", data);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            const message = error.response?.data?.message || "Failed to create school";
            throw new Error(message);
        }
        throw error;
    }
}

