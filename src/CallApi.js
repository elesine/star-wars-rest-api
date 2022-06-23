import axios from "axios";

const callApi = async (url, callback) => {
  if (url) {
    try {
      const response = await axios.get(url);
      if (response.status === 200) callback(response.data);
    } catch (error) {
      console.log("Error Endpoint: ", url);
      console.log(error);
      alert("Error", url, error.status);
    }
  }
};

export default callApi;
