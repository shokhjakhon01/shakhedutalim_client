import { createAsyncThunk } from "@reduxjs/toolkit"
import { AuthService } from "src/services/auth.service"
import {
  AuthUserResponse,
  InterfaceEmailAndOtp,
  InterfaceEmailAndPassword,
} from "./user.interface"
import { errorCatch } from "src/helpers/api.helper"

export const register = createAsyncThunk<
  AuthUserResponse,
  InterfaceEmailAndPassword
>("auth/register", async ({ email, password }, thunkApi) => {
  try {
    const response = await AuthService.register(email, password)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(errorCatch(error))
  }
})

export const login = createAsyncThunk<
  AuthUserResponse,
  InterfaceEmailAndPassword
>("auth/login", async ({ email, password }, thunkApi) => {
  try {
    const response = await AuthService.login(email, password)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(errorCatch(error))
  }
})

export const sendVerificationCode = createAsyncThunk<
  "Success",
  { email: string }
>("auth/verification-code", async ({ email }, thunkApi) => {
  try {
    const response = await AuthService.sendotp(email)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(errorCatch(error))
  }
})

export const verifyVerificationCode = createAsyncThunk<
  "Success",
  InterfaceEmailAndOtp
>("auth/verify-verification-code", async ({ email, otp }, thunkApi) => {
  try {
    const response = await AuthService.verifyOtp(email, otp)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(errorCatch(error))
  }
})

export const logout = createAsyncThunk("auth/logout", () => {
  AuthService.logout()
})

export const checkAuth = createAsyncThunk<AuthUserResponse>(
  "auth/check-auth",
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens()
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error))
    }
  }
)
