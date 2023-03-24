import axios from "axios";


const login = async (userData) => {

  const response = await axios.post("http://localhost: 5000/api/admin/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("userToken", response.data.token);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("id", response.data._id);

    // console.log(localStorage.getItem("user"))
    console.log(response.data.token)
  }
  return response.data;
};

const LoginService = {
  login,
};

export default LoginService;
