import axios from "axios";

const Pass = () => {
  const buyPass = async(callback) => {
    const { data } = await axios.post("http://35.243.146.103:3001/buy_pass",
    {},
    {
      params: {
        user_id: 1,
        competition_id: 1
      }
    });
    if(data) callback(data.status);
  }
  const usesPass = async(callback) => {
    const { data } = await axios.post("http://35.243.146.103:3001/use_pass",
    {},
    {
      params: {
        user_id: 1,
        competition_id: 1
      }
    });
    if(data) callback(data.status);
  }
  return { buyPass, usesPass }
}

export default Pass;

