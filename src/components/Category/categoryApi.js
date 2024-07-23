import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const deleteCategory = async (id) => {
    try {
        const response = await axios.post(`${apiUrl}/api/categories/${id}/delete`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addCategory = async (categoryData) => {
    try {
        const response = await axios.post(`${apiUrl}/api/categories`, categoryData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateCategory = async (id, categoryData) => {
    try {
        const response = await axios.put(`${apiUrl}/api/categories/${id}`, categoryData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
