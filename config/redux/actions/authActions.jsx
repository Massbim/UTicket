import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";


export const register = (data, router, setLoading) => async (dispatch) => {
    console.log('data: ', data);
    try {
        const result = await axios.post(process.env.API_BACKEND + "users/register", data);
        const user = result.data;
        console.log('user: ', user);
        toast.success(user.message, { toastId: "successSignUp" });
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
        router.push("/auth/login");
        setLoading(false);
    } catch (error) {
        toast.warning(error.response.data.message, { toastId: "errorSignUp" });
        setLoading(false);
    }
};

export const login = (data, router, setLoading) => async (dispatch) => {
    console.log('data: ', data)
    try {
        const result = await axios.post(process.env.API_BACKEND + "users/login", data);
        const user = result.data.data;
        console.log('user: ', user);
        toast.success("Sign In Success. Welcome " + user.name, { toastId: "successSignIn" });
        Cookies.set("token", user.token);
        Cookies.set("user_id", user.id);
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        router.push("/home");
        setLoading(false);
    } catch (error) {
        toast.warning(error.response.data.message, { toastId: "errorSignIn" });
        setLoading(false);
    }
};
