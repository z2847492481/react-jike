import { createSlice } from "@reduxjs/toolkit"
import { request } from "@/utils/request"
import { setToken as _setToken, getToken, removeToken } from "@/utils"
const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      // 将token存储到localStorage中
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserIfo(state) {
      state.userInfo = {}
      state.token = ""
      removeToken()
    }
  }
})

const { setToken, setUserInfo, clearUserIfo } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm)
    dispatch(setToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get("/user/profile")
    dispatch(setUserInfo(res.data))
  }
}

export { setToken, fetchLogin, fetchUserInfo, clearUserIfo }

export default userReducer
