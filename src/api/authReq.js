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
export const citySearchItem = (destination) => API.get(`/hotels/search?city=${destination}`)
export const submintId = (bookingId) => API.post(`/book/bookingId`,bookingId)
export const submintReview = (review) => API.post(`/hotels/review`,review)
export const getReview = (id) => API.get(`/hotels/find/${id}`)
export const getUser = (id) => API.get(`/users/profile`,id)
export const getUserpro = (userId) => API.get(`/users/reviewprofile/${userId}`)
export const getbookingsDates = () => API.get(`/book/bookingdates`)
export const getHotel = () => API.get(`/hotels`)
export const getHoteltype = () => API.get(`/hotels/countByType`)
export const getCountByCity = () => API.get(`/hotels/countByCity`)
// export const findHotel = () => API.get(`/hotels/find/${id}`)

