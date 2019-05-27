import axios from "axios";

export default function setAuthToken(token) {
  if(token) {
    axios.defaults.headers.common = { 
      'Authorization': `Baerer ${token}`
    }
  } else {
    delete axios.defaults.common.Authorization;
  }
}