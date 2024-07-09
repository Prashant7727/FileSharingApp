import axios from 'axios';

const API_URI = 'https://file-sharing-backend-eight.vercel.app';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Error response data:', error.response.data);
            console.log('Error response status:', error.response.status);
            console.log('Error response headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log('Error request:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error message:', error.message);
        }
        console.log('Error config:', error.config);
    }
}
