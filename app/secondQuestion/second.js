import axiosInstance,{ AUTH_ROUTES} from "../service/api";
import { successNotifier, errorNotifier } from "../components/notifier";



export const getQuestion = async (type) => {
    try {
      const { data } = await axiosInstance.get(AUTH_ROUTES.GET_QUESTIONS(type));
      console.log("QUESTION", data);
      return data;
    } catch (e) {
      if (e?.response) {
        errorNotifier(
          console.log(
            e.response?.data?.message || e.response?.data?.data?.message
          )
        );
      } else {
        errorNotifier("Network Error, please check your internet connections");
      }
    }
  };