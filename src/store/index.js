import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../reducers/countReducer';
import todoReducer from '../reducers/todoReducer';

export default configureStore({
    reducer: {
        count: countReducer,
        todo : todoReducer,
    }
});