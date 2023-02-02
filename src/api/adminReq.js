import axios from 'axios'

const API = axios.create({
    baseURL:'http://localhost:5000/api'
})

export const getAllUserAPI = () => API.get('/users')
export const getAllHotelAPI = () => API.get('/hotels')
