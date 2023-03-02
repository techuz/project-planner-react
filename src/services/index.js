import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
const statusCode = [401, 422, 400, 500, 404];

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && statusCode.includes(error.response.status)) {
      return Promise.resolve(error.response);
    } else {
      return Promise.reject(error);
    }
  }
);

const getHeaders = (isAuthorized, authToken, isFormWithImg) => {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  if (isAuthorized) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  if (isFormWithImg) {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
};

export const useRequestToServer = (
  url,
  data,
  method,
  isAuthorized = false,
  isFormWithImg = false
) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  let requestUrl = `${API_URL}${url}`;
  let authToken = useLocalStorage("token", null);
  let headers = getHeaders(isAuthorized, authToken, isFormWithImg);

  return new Promise((resolve, reject) => {
    axios({ method, requestUrl, headers, data })
      .then((response) => {
        if (response && response.status === 401) {
          navigate("/", { replace: true });
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default useRequestToServer;
