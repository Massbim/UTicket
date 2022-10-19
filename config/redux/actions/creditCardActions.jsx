import axios from 'axios';

export const getCreditCard = (token) => async (dispatch) => {
    try {
        const result = await axios.get(process.env.API_BACKEND + "creditCard", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const cc = result.data.data;
        console.log('cc: ', cc);
        dispatch({ type: "GET_CREDIT_CARD", payload: cc });
    } catch (error) {
        console.log(error.response.data.message);
    }
};


