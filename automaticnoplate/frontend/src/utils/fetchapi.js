import axios from "axios";

export const postAPI = async (url, payload, token) => {
  let path = `${process.env.REACT_APP_API_URI}/${url}`;
  console.log(path);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: path,
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    data: payload,
  };

  return axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getAPI = async (slug, token) => {
  console.log("hey i am slug", slug);
  const path = `${process.env.REACT_APP_API_URI}/${slug}`;
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: path,
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
  };

  return axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const apiCallBack = async (method, slug, payload, token) => {
  let path = `${process.env.REACT_APP_API_URI}/${slug}`;
  // console.log("Path", path);

  let config = {
    method: method,
    maxBodyLength: Infinity,
    url: path,
    headers: {
      token,
    },
    // Conditionally set the Content-Type based on the payload
    ...(payload instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" }),
    data: payload,
  };

  return axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
