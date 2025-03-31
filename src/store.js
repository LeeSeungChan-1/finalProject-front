import {configureStore} from "@reduxjs/toolkit";
import loginSlice, {login} from "./slices/loginSlice";


export default configureStore({
    reducer: {
        'loginSlice': loginSlice,
    }
})