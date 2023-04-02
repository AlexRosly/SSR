import axios from "axios";
import { SERVER_URI } from "services/CONSTANTS";
export default class Authentication {
  checkPhone(phone) {
    let url = "/api/auth/code"
    if (process.env.NODE_ENV === 'production') {
     url = SERVER_URI+url; 
    }
    return axios.post(url, { mobileNumber: phone });
  }

  register(body) {
    let url = "/api/auth/register";
    if (process.env.NODE_ENV === 'production') {
      url = SERVER_URI+url; 
     }
    return axios.post(url, body);
  }
}
