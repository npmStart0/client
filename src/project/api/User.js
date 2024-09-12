import axios from "axios";

const url = `${process.env.URL}/User`;

export const addUser = async (user) => {
    try {
        const result = await axios.post(url, user);
        return result.data;
    } catch (error) {
        console.error('Error in addUser:', error);
        return null;
    }
};

export const getUser = async (email, password) => {
    try {
        const result = await axios.get(`${url}/${email}/${password}`);
        return result.data;
    } catch (error) {
        console.error("Error in getUser:", error);
        return null;
    }
};

export const getUsers = async () => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.error("Error in getUsers:", error);
        return null;
    }
};

export const updateUser = async (user) => {
    try {
        const result = await axios.put(url, user);
        return result.data;
    } catch (error) {
        console.error("Error in updateUser:", error);
        return null;
    }
};

export const deleteUser = async (id) => {
    try {
        const result = await axios.delete(`${url}/${id}`);
        return result.data;
    } catch (error) {
        console.error("Error in deleteUser:", error);
        return null;
    }
};
