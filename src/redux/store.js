import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    cars: carReducer
    // second: reducer
});

const store = configureStore({
    reducer:rootReducer
})

export default store