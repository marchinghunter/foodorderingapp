import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../src/axiosInstance";

const initialState = {
  name: "",
  email: "",
  password: "",
  emailerror: false,
  isLoading: false,
  apierror: false,
  status: false,
  isLoggedIn: false,
  wrongpassword: false,
};
const createUserData = createAsyncThunk("user/createUser", async (userdata) => {
  try {
    const response = await axiosInstance.post(
      "/signup",
      userdata,
      {
        withCredentials: true,
      }
    );
    console.log(response);
  } catch (error) {
    if (error.response.data.code === 11000) {
      throw error.response.data.code;
    }
    console.log(error);
    throw error;
  }
});
const checkUser = createAsyncThunk("user/checkUser", async (user) => {
  try {
    const userData = {
      email: user.email,
      password: user.password,
    };
    const response = await axiosInstance.post("/login", userData, {
      withCredentials: true,
    });
    console.log(response.data);
    if (response.data === "nau"||response.data === "pe") {
      throw response.data;
    }
  } catch (error) {
    throw error;
  }
});
const logout = createAsyncThunk("user/logout", async ()=>{
  try {
    const response = await axiosInstance.get("/logout",{
      withCredentials: true,
    });
    console.log(response.data);
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      console.log(state.email);
    },
    reset(state){
      state.name= "";
      state.email= "";
      state.password= "";
      state.emailerror= false;
      state.isLoading= false;
      state.apierror= false;
      state.status= false;
      state.isLoggedIn= false;
      state.wrongpassword= false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(createUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = true;
        state.isLoggedIn = true;
      })
      .addCase(createUserData.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.message === "11000") {
          state.emailerror = true;
          state.isLoggedIn = false;
        } else {
          state.apierror = true;
          state.isLoggedIn = false;
        }
      })
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = true;
        state.isLoggedIn = true;
        console.log('Fullfilled')
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.isLoading = false;
        
        if (action.error.message === "nau") {
          state.emailerror = true;
        } else if (action.error.message === "pe") {
          state.wrongpassword = true;

        } else {
          state.apierror = true;
          state.isLoggedIn = false;
        }
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.status = false;
        state.isLoggedIn = false;
        console.log('Fullfilled')
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setUser,reset } = userSlice.actions;
export { checkUser, createUserData,logout };
export default userSlice.reducer;
