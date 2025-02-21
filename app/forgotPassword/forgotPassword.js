import { successNotifier, errorNotifier } from "../components/notifier";
import axiosInstance,  { AUTH_ROUTES } from "../service/routes.constants";



export const forgotPassword = async (payload) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES?.FORGOT_PASSWORD, payload);
      successNotifier("Reset Successful")
      return data
    } catch (e) {
      setLoading(false);
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