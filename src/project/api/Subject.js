import axios from "axios";

const url = `${process.env.URL}/Subject`;

export const addSubject = async (Subject) => {
    try {
        const result = await axios.post(url, Subject);
        return result.data;
    } catch (error) {
        console.error("Error in addSubject:", error);
        return null;
    }
};

export const getSubject = async (id) => {
    try {
        const result = await axios.get(`${url}/${id}`);
        return result.data;
    } catch (error) {
        console.error("Error in getSubject:", error);
        return null;
    }
};

export const getSubjects = async () => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.error("Error in getSubjects:", error);
        return null;
    }
};

export const updateSubject = async (Subject) => {
    try {
        const result = await axios.put(url, Subject);
        return result.data;
    } catch (error) {
        console.error("Error in updateSubject:", error);
        return null;
    }
};

export const deleteSubject = async (id) => {
    try {
        const result = await axios.delete(`${url}/${id}`);
        return result.data;
    } catch (error) {
        console.error("Error in deleteSubject:", error);
        return null;
    }
};
