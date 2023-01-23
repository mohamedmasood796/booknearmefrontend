
import { createSlice } from '@reduxjs/toolkit';

const searchbar=createSlice({
    name:"searchbar",
    initialState:{
        city:null,
        dates:[],
        options:{
            adult:null,
            children:null,
            room:null,
        }
    },

    reducers:{
        newSearch(state,actions){
            const  items=actions.payload
            console.log("dispatch",items)
             state.city=items.city
             state.dates=items.dates    
             state.options=items.options
         }
    }
})
export const searchbarAction=searchbar.actions;

export default searchbar