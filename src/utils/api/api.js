import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const apiService = axios.create({
    baseURL,
});

const getData = async (path) => {
    try {
        const response = await apiService.get(path);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${path}:`, error);
        return null;
    }
};

const postData = async (path, data) => {
    try {
        const response = await apiService.post(path, data);
        return response.data;
    } catch (error) {
        console.error(`Error posting data to ${path}:`, error);
        return null;
    }
};

const updateData = async (path, data) => {
    try {
        const response = await apiService.put(path, data);
        return response.data;
    } catch (error) {
        console.error(`Error updating data at ${path}:`, error);
        return null;
    }
};

const deleteData = async (path) => {
    try {
        const response = await apiService.delete(path);
        return response.data;
    } catch (error) {
        console.error(`Error deleting data at ${path}:`, error);
        return null;
    }
};

export { getData , postData , updateData , deleteData };