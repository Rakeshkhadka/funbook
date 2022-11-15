import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'

const store = configureStore({
  reducer: {
    authData: authReducer
  },
})



// export default the store 
export default store