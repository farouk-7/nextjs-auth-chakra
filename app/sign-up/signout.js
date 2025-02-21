// import { errorNotifier, successNotifier } from "../../../component/notifier";
import { errorNotifier, successNotifier } from "../components/notifier";
import axiosInstance,  { AUTH_ROUTES } from "../service/api";



export const signUpUser = async (payload, setLoading, router) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES.SIGN_UP, payload);
      setLoading(false);
      console.log(data)
      successNotifier("User Created Successfully")
      router.push({
        pathname: `/verify-code/${email}`,
        query: { state: JSON.stringify(data) },
      })
      // window.location.replace("/")
    } catch (e) {
      setLoading(false);
      if (e.response) {
        errorNotifier(
          e.response?.data?.message || e.response?.data?.data?.message
        );
      } else {
        errorNotifier("Network Error, please check your internet connections");
      }
    }
  };
  