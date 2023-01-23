// // import { createSlice } from '@reduxjs/toolkit';


// // const searchHotel = createSlice({
// //     name: "searchHotel",
// //     INITIAL_STATE: {
// //         city: undefined,
// //         dates: {
// //             options: {
// //                 adult: undefined,
// //                 children: undefined,
// //                 room: undefined,
// //             }
// //         }
// //     },

// //     reducers: {
// //         searchReducer(state, action) {
// //             switch (action.type) {
// //                 case "NEW_SEARCH":
// //                     return action.payload

// //                 case "RESET_SEARCH":
// //                     return INITIAL_STATE

// //                 default:
// //                     return state;
// //             }
// //         }
// //     }

// // })
// // export const searchHotelAction=searchHotel.actions;

// // export default searchHotel;


// import { createSlice } from '@reduxjs/toolkit';

// const searchbar=createSlice({
//     name:"searchbar",
//     initialState:{
//         city:undefined,
//         dates:[],
//         options:{
//             adult:undefined,
//             children:undefined,
//             room:undefined,
//         }
//     },

//     reducers:{
//         newSearch(state,action){
//          },
//         resetSearch(state,action){
//             return initialState
//         }
//     }
// })
// export const searchbarAction=searchbar.actions;

// export default searchbar