import axios from 'axios';

const sendRequest = async (endpoint, method, data= null, token=null,  baseURL = process.env.REACT_APP_API_URL) => {
    const url = `${baseURL}${endpoint}`;
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try{
        const response = await axios.request({
            url,
            method,
            headers,            
            data,
        });
        return response.data;
    } catch(error){
        console.error('Request faild ,' ,error);
    }
};

export default sendRequest;