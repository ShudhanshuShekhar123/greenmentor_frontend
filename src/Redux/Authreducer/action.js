import axios from "axios";
import { url } from "../../baseserverurl";
import tokenvalidate from "../../components/tokenvalidation";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const login = (details) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(
      `${url}/login`,
      details
    );
    if (res.error) {
      throw new Error(res.error);
    }

    console.log(res.data, "login success");
    localStorage.setItem("token",res.data.token)
    const istokenvalid = tokenvalidate()
    dispatch({ type: LOGIN_SUCCESS, payload:istokenvalid });
    
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
    console.log(err);
    alert("Something went wrong");
  }
};




// export const register = (details) => async (dispatch) => {
//   try {
//     const res = await axios.post(
//       "https://fitness-place.onrender.com/user/register",
//       details
//     );
//     if (res.error) {
//       throw new Error(res.error);
//     }
//     alert("Register successfull");
//   } catch (err) {
//     console.log(err);
//     alert("error");
//   }
// };