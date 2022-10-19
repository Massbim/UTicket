import axios from 'axios';

export const getUserProfile = (token) => async (dispatch) => {
    try {
        const result = await axios.get(process.env.API_BACKEND + "users/profile/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const user = result.data.data;
        console.log('user: ', user);
        dispatch({ type: "GET_USER_PROFILE", payload: user });
    } catch (error) {
        console.log(error.response.data.message);
    }
};


