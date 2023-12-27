import * as Yup from "yup"

export const AuthValidation = {
  register() {
    return Yup.object({
      email: Yup.string()
        .email("email is invalid")
        .required("email is required"),
      password: Yup.string()
        .min(6, "Password must be at  least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password doesnt same")
        .required("Confirm Password is required"),
    })
  },
  login() {
    return Yup.object({
      email: Yup.string()
        .email("email is invalid")
        .required("email is required"),
      password: Yup.string()
        .min(6, "Password must be at  least 6 characters")
        .required("Password is required"),
    })
  },
  otp() {
    return Yup.object({
      otp: Yup.string()
        .required("Enter Verification code")
        .min(6, "Verification code must be 6 digit"),
    })
  },
}
