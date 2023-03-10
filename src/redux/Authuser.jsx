import { createSlice } from '@reduxjs/toolkit';

const Authuser=createSlice({
    name:"user",
    initialState:{
        userToken:null,
        user:null,
        loading:false,
        error:null,
    },
    reducers:{
        loginSuccess(state,actions){
             const newItem=actions.payload;
             state.user=newItem.username
            //  state.userToken=newItem.token
             state.loading=false
             state.error=null  

        },
    
        userLogout(state,actions){
            state.user=null;
            state.userToken=null;
            state.error=null
        }
    }
})

export const {loginSuccess, userLogout} = Authuser.actions;

export default Authuser;