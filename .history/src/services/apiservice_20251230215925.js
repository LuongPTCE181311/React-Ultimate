import axios from "axios";

const createUserAPI = (fullname, email, password, phone) => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
      fullName: fullname,
      email: email,
      password: password,
      phone: phoneNumber,
    };
    axios.post(URL_BACKEND, data);
}

const updateUserAPI = () => {

}

export {createUserAPI, updateUserAPI}