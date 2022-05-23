import axios from 'axios'
const instance = () =>{
    return axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1600,
    });
};
export default instance;