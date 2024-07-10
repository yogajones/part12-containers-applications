import axios from "../util/apiClient"
const baseUrl = "/users";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAll };
