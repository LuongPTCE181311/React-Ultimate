import { Header } from "antd/es/layout/layout";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data);
};

const updateUserAPI = (_id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_BACKEND, data);
};

const fetchAllUserAPI = (cuurent) => {
  const URL_BACKEND = "/api/v1/user?current=1&pageSize=1";
  return axios.get(URL_BACKEND);
};

const deleteUserAPT = (id) => {
  const URL_BACKEND = `/api/v1/user/${id}`;
  return axios.delete(URL_BACKEND);
};

const fetchAllBookAPI = (current, pageSize) => {
  const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`;
  return axios.get(URL_BACKEND);
};

const handleUploadFile = (file, folder) => {
  const URL_BACKEND = `api/v1/file/upload`;
  let config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormdData = new FormData();
  bodyFormdData.append("fileImg", file);
  return axios.post(URL_BACKEND, bodyFormdData, config);
};

const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id: _id,
    avatar: avatar,
    fullName: fullName,
    phone: phone
  };
  return axios.put(URL_BACKEND, data);
};

export {
  createUserAPI,
  updateUserAPI,
  fetchAllUserAPI,
  deleteUserAPT,
  fetchAllBookAPI,
  handleUploadFile,
  updateUserAvatarAPI,
};
