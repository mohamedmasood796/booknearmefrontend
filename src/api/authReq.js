import axios from 'axios'

const API = axios.create({
    baseURL:`${process.env.REACT_APP_BACK_END}/api`
})
API.interceptors.request.use((req) => {
    if (localStorage.getItem("jwt")) {
      req.headers.Authorization = "Bearer " + localStorage.getItem("jwt");
    }
    return req;
  });
  
export const registerUser = (userData) => API.post('/auth/register',userData)
export const loginUser = (userData) => API.post('/auth/login',userData)
export const verifySignUp = (userId) => API.put(`/auth/verify/${userId}`)
export const getRoomDataById = (id) => API.get(`/hotels/room/${id}`)
export const booking = (formData) => API.post('/book/booking',formData)
export const verify = (newOrder) => API.post('/book/verify',{newOrder})
export const getBookings = () => API.get(`/book/bookings`)//set user id to backent
export const typeSearchItem = (searchType) => API.get(`/hotels/type/${searchType}`)
export const citySearchItem = (destination) => API.get(`/hotels?city=${destination}`)

