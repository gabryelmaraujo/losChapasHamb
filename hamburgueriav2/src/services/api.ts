import axios from "axios";


const instance = axios.create({
    baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
    timeout: 5000
})

export default instance