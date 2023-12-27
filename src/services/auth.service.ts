import axios from "axios"
import Cookies from "js-cookie"
import { API_URL, getAuthUrl, getMailUrl } from "src/config/api.config"
import { removeTokenCookie, saveStorage } from "src/helpers/auth.helper"
import { AuthUserResponse } from "src/store/user/user.interface"

export const AuthService = {
  async register(email: string, password: string) {
    const response = await axios.post<AuthUserResponse>(
      `${API_URL}${getAuthUrl("register")}`,
      {
        email,
        password,
      }
    )
    if (response.data.accessToken) {
      saveStorage(response.data)
    }
    return response
  },

  async login(email: string, password: string) {
    const response = await axios.post<AuthUserResponse>(
      `${API_URL}${getAuthUrl("login")}`,
      {
        email,
        password,
      }
    )
    if (response.data.accessToken) {
      saveStorage(response.data)
    }
    return response
  },

  async sendotp(email: string) {
    const response = await axios.post<"Success">(
      `${API_URL}${getMailUrl("send-otp")}`,
      { email }
    )
    return response
  },

  async verifyOtp(email: string, otp: string) {
    const response = await axios.post<"Success">(
      `${API_URL}${getMailUrl("verify-otp")}`,
      { email, otp }
    )
    return response
  },

  async logout() {
    removeTokenCookie()
    localStorage.removeItem("user")
  },

  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken")
    const response = await axios.post<AuthUserResponse>(
      `${API_URL}${getAuthUrl("auth")}`,
      {
        refreshToken,
      }
    )
    if (response.data.accessToken) {
      saveStorage(response.data)
    }
    return response
  },
}
