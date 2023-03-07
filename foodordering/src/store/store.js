import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../slice/cartdata'
import itemSlice from '../slice/itemdata'
import userSlice from '../slice/userdata'

export const store = configureStore({
    reducer: {userSlice,cartSlice,itemSlice}
})