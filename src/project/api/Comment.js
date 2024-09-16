import axios from "axios";

const url = `${process.env.URL}/Comment`;

export const addComment = async (Comment) => {
    try {
        const result = await axios.post(url, Comment);
        return result.data;
    } catch (error) {
        console.error("Error in addComment:", error);
        return null;
    }
};

export const getComment = async (id) => {
    try {
        const result = await axios.get(`${url}/${id}`);
        return result.data;
    } catch (error) {
        console.error("Error in getComment:", error);
        return null;
    }
};

export const getComments = async () => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.error("Error in getComments:", error);
        return null;
    }
};

export const updateComment = async (Comment) => {
    try {
        const result = await axios.put(url, Comment);
        return result.data;
    } catch (error) {
        console.error("Error in updateComment:", error);
        return null;
    }
};

export const deleteComment = async (id) => {
    try {
        const result = await axios.delete(`${url}/${id}`);
        return result.data;
    } catch (error) {
        console.error("Error in deleteComment:", error);
        return null;
    }
};
