import { createSlice } from "@reduxjs/toolkit"
import { request } from "@/utils/request"

const userStore = createSlice({
  name: "user",
  initialState: {
    token: ""
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    }
  }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm)
    dispatch(setToken(res.data.token))
  }
}

export { setToken, fetchLogin }

export default userReducer
