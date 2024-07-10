import axios from "../util/apiClient"
const baseUrl = "/blogs";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (blogToUpdate) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `${baseUrl}/${blogToUpdate.id}`;
  const response = await axios.put(url, blogToUpdate, config);
  return response.data;
};

const comment = async (id, comment) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `${baseUrl}/${id}/comments`;
  const response = await axios.post(url, { comment: comment }, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const url = `${baseUrl}/${id}`;
  const response = await axios.delete(url, config);
  return response.data;
};

export default { getAll, setToken, create, update, comment, remove };
