import { idID } from '@mui/material/locale'
import axios from 'axios'

const API = axios.create({
    baseURL:'http://localhost:5000/api'
})

export const getAllUserAPI = () => API.get('/users')
export const getAllHotelAPI = () => API.get('/hotels')
export const getRoomAPI = (id) => API.get(`/hotels/room/${id}`)
export const loginAdmin = (adminData) => API.post('/admin/adminlogin',adminData)
export const blockUser = (userBlock) => API.put('/admin/changestatus',userBlock)
export const addHotel = (addhotel) => API.post('/hotels',addhotel)
export const addRoom = (addRoom,id) => API.post(`/rooms/${id}`,addRoom)
export const deleteHotel = (id) => API.delete(`/hotels/${id}`)
export const deleteRoom = (id,hotelid) => API.delete(`/rooms/${id}/${hotelid}`)
