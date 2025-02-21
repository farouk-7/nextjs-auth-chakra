import { errorNotifier, successNotifier } from "../components/notifier";
import { APP_CONSTANTS } from "../constants/app";
import axiosInstance, { AUTH_ROUTES } from "../service/api";
import { setLocalStorageItem, setLocalStorageString } from "../utils/localStorage";


export const login = async (payload, setLoading, router) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES.LOGIN, payload);
      
      // console.log(data?.token,"kkk")
      setLocalStorageString(APP_CONSTANTS.token, data?.token);
      setLocalStorageItem(APP_CONSTANTS.user, data);
      setLoading(false);
      successNotifier("Login Successful")
      router.push("/dashboard")
      
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