import axios from "axios";

const instanceAxios  = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com',
    timeout: 5000,
});

export default instanceAxios