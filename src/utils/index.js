// 将工具统一导出 方便其他模块引用
import request from "./request"
import { getToken, setToken, removeToken } from "./token"
export { request, getToken, setToken, removeToken }
