import axios from "axios";
const timeout = 60000;
const axiosInstance = axios.create({baseURL: 'https://fakestoreapi.com', timeout})

const client = {
    get: axiosInstance.get,
}

export default client