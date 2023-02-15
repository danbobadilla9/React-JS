import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers'; //Aqui llama al index.js

const store = configureStore({
    reducer:rootReducer
})


export default store;
