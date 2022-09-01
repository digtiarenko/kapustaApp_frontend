import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesList } from './categoriesOperations';

const initialState = {
    categories: null,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
        [getCategoriesList.fulfilled](state, { payload }) {
            console.log(payload)
        }
    }
}
)

export default categoriesSlice.reducer