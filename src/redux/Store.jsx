import { configureStore } from "@reduxjs/toolkit";
import searchbar from "./Searchbar";
import Authuser from "./Authuser";


const Store=configureStore({
    reducer:{searchresult:searchbar.reducer,userAuth:Authuser.reducer}
})
export default Store;