import axios from "axios";

const request = axios.create({
    baseURL:"https://66cd8c938ca9aa6c8ccabdb1.mockapi.io/api/cards"
})


export default request