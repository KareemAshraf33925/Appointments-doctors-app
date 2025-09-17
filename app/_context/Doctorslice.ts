import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// Define a type for the slice state
import { initialState } from './api'
interface doc{ 
    id:string;
    name:string;
    description:string;
    image:string;
    date:string;
    time:string;
     popular:string;
    category:string;
}
interface select{
  selected:doc,
  date:string,
  hour:string, 
  }
export const doctorSlice = createSlice({
  name: 'doctor',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addapointment:(state,action:PayloadAction<select>)=>{
      state.appointments.push(action.payload)
    },
    remove:(state,action:PayloadAction<number>)=>{
      state.appointments.splice(action.payload,1)
    }
  },
})

export const {addapointment,remove} =doctorSlice.actions
export default doctorSlice.reducer