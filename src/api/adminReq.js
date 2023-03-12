import { idID } from '@mui/material/locale'
import axios from 'axios'

const API = axios.create({
    baseURL:`${process.env.REACT_APP_BACK_END}/api`
})

export const getAllUserAPI = () => API.get('/users')
export const getAllHotelAPI = () => API.get('/hotels/admin')
export const getRoomAPI = (id) => API.get(`/hotels/room/${id}`)
export const loginAdmin = (adminData) => API.post('/admin/adminlogin',adminData)
export const blockUser = (userBlock) => API.put('/admin/changestatus',userBlock)
export const addHotel = (addhotel) => API.post('/hotels',addhotel)
export const addRoom = (addRoom,id) => API.post(`/rooms/${id}`,addRoom)
export const deleteHotel = (id) => API.delete(`/hotels/${id}`)
export const deleteRoom = (id,hotelid) => API.delete(`/rooms/${id}/${hotelid}`)
export const addCity = (addcity) => API.post('/hotels/city',addcity)
export const getCity = () => API.post('/hotels/getcity')
export const paymentChart = () => API.get('/admin/paymentChart')
export const bookingChart = () => API.get('/admin/bookingChart')
export const bookingDetails = () => API.get('/admin/bookingDetails')
export const cancleBooking = (id) => API.get(`/admin/cancleBooking/${id}`)
export const getHotel=(id)=>API.get(`hotels/find/${id}`)
export const updateHotel=(id,hoteldata)=>API.post(`hotels/updateHotel`,id,hoteldata)
export const getBookingData=(id)=>API.get(`admin/bookingdetailsadmin/${id}`)
export const getFullData=(id)=>API.get(`admin/getFullData`)


