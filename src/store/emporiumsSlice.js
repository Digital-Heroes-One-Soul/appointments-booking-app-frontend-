import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";



// function async thunk to add a new emporiums. 
export const getEmporiums = createAsyncThunk("emporiums/getEmporiums", async (_, thunkAPI) => {

    const { rejectWithValue } = thunkAPI
    try {

        const res = await axios.get('http://127.0.0.1:8000/shop/')
        return await res.data

    } catch (error) {
        return (rejectWithValue(error))
    }

})



// function async thunk to get all emporiums. 
export const addEmporiums = createAsyncThunk("emporiums/addEmporiums", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
       
          const response = await axios.post('http://127.0.0.1:8000/shop/', data, {
            headers: { 'content-type': 'application/json; charset=UTF-8' }
          });

          return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});




export const deleteEmporiums = createAsyncThunk ("emporiums/deleteEmporiums", async(id, thunkAPI)=>{

const {rejectWithValue} = thunkAPI;

try {

    const res =  await axios.delete(`http://127.0.0.1:8000/shop/${id}`)
      console.log(res);
    



} catch (error) {
    return rejectWithValue(error.message)
}






}) 


export const emporiumsSlice = createSlice({
    name: "emporiums",
    initialState: { emporiums: [], error: null, isLoading: false, },

    extraReducers: {

        // get shops 
        [getEmporiums.pending]: (state, action) => {
            state.isLoading = true;

        },
        [getEmporiums.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.emporiums = action.payload
            state.error = null;
        },
        [getEmporiums.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
        ,
        // add shop
        [addEmporiums.pending]: (state, action) => {
            state.isLoading = true;

        },
        [addEmporiums.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.emporiums.push(action.payload)
            state.error = null;
        },
        [addEmporiums.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }

        ,
        // delete shop
        [deleteEmporiums.pending]: (state, action) => {
            state.isLoading = true;

        },
        [deleteEmporiums.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.emporiums.filter(item=>{
                return item.id !== action.payload
            })
            state.error = null;
        },
        [deleteEmporiums.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }


    }

})




export default emporiumsSlice.reducer