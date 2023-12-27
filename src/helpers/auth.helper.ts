import Cookies from "js-cookie"
import { AuthToken, AuthUserResponse } from "src/store/user/user.interface"

export const saveTokensCookies = (data: AuthToken) => {
  Cookies.set("accessToken", data.accessToken)
  Cookies.set("refreshToken", data.refreshToken)
}

export const saveStorage = (data: AuthUserResponse) => {
  saveTokensCookies(data)
  localStorage.setItem("user", JSON.stringify(data.user))
}

export const removeTokenCookie = () => {
  Cookies.remove("accessToken")
  Cookies.remove("refreshToken")
}
