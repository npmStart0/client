import axios from "axios";

const url = `${process.env.URL}/Discussion`;

export const addDiscussion = async (Discussion) => {
    try {
        const result = await axios.post(url, Discussion);
        return result.data;
    } catch (error) {
        console.error("Error in addDiscussion:", error);
        return null;
    }
};

export const getDiscussion = async (id) => {
    try {
        const result = await axios.get(`${url}/${id}`);
        return result.data;
    } catch (error) {
        console.error("Error in getDiscussion:", error);
        return null;
    }
};

export const getDiscussions = async () => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.error("Error in getDiscussions:", error);
        return null;
    }
};

export const updateDiscussion = async (Discussion) => {
    try {
        const result = await axios.put(url, Discussion);
        return result.data;
    } catch (error) {
        console.error("Error in updateDiscussion:", error);
        return null;
    }
};

export const deleteDiscussion = async (id) => {
    try {
        const result = await axios.delete(`${url}/${id}`);
        return result.data;
    } catch (error) {
        console.error("Error in deleteDiscussion:", error);
        return null;
    }
};