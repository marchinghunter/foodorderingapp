import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../src/axiosInstance";


const initialState = {
    item:[],
    isLoading:false,
};
const getItem = createAsyncThunk('items/getItems',async ()=>{
  try {
    const response =  await axiosInstance('/foodmenu');
  return response.data;
  } catch (error) {
    console.log(error);
  }
  
})

const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  extraReducers(builder){
    builder.addCase(getItem.pending,(state)=>{
      state.isLoading = true;
    })
    .addCase(getItem.fulfilled,(state,action)=>{
      // console.log(action.payload)
      state.isLoading = false;
      state.item=action.payload;
    })
    .addCase(getItem.rejected,(state)=>{
      state.isLoading = false;
    })
  }
});

export {getItem};
export default itemSlice.reducer;
