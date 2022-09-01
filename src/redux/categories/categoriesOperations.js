import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategoriesList = createAsyncThunk(
    'categories/getList',
    async () => {
        try {
            const { data } = await axios.get('/categories')
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
)

