import axios from "axios";
  
const instance = axios.create({
	baseURL: "https://react-my-burger-d1f4a-default-rtdb.firebaseio.com/"
});

export default instance;