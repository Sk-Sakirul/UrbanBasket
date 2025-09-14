import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import commonFeatureSlice from './commonSlice';


const store = configureStore({
    reducer: {
        auth : authReducer,

        commonFeature: commonFeatureSlice
    }
});

export default store;