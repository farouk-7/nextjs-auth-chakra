
import { errorNotifier, successNotifier } from "../components/notifier";
import axiosInstance, { AUTH_ROUTES } from "../service/api";


export const sendOtp = async (payload) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES?.SEND_OTP, payload);
      successNotifier("Code Successfully sent")
    } catch (e) {
      // setLoading(false);
      if (e.response) {
        errorNotifier(
          e.response?.data?.message || e.response?.data?.data?.message
        );
      } else {
        errorNotifier("Network Error, please check your internet connections");
        setLoading(false);
      }
    }
  };

  export const resendOTP = async (payload) => {
    try {
      const {
        data: { data },
      } = await http.post(AUTH_ROUTES.RESEND_OTP,payload );
      successNotifier("OTP SENT TO YOUR EMAIL")
      // navigateTo(`/complete-profile?email=${email}`);
      return data;
    } catch (e) {
      errorNotifier(e.response?.data?.message || e.response?.data?.data?.message);
      console.log(e.response?.data?.message || e.response?.data?.data?.message)
    }
  };