import { createSlice } from '@reduxjs/toolkit';

const Authuser=createSlice({
    name:"user",
    initialState:{
        userToken:null,
        user:null,
        loading:false,
        error:null,
    },
    reducer:{
        loginSuccess(state,actions){
             const newItem=actions.payload;
             state.user=newItem.user
             state.userToken=newItem.token
             state.loading=false
             state.error=null  

        },
        loginFailure(state,actions){
            const newItem=actions.payload
            state.user=null
            state.loading=false
            state.error=newItem.actions
        },
        userLogout(state){
            state.user=null;
            state.userToken=null;
            state.error=null
        }
    }
})

export const userActions = Authuser.actions;

export default Authuser;