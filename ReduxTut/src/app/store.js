import { configureStore } from '@reduxjs/toolki';
import counterReducer from '../features/counter/counterSlide';



export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },

})