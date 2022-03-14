import axios from "axios"

const Pass = () => {
  const buyPass = async() => {
    const response = await axios.post("http://35.243.146.103:5000/buy_pass");
    console.log(response)
  }
  const usePass = () => {
    const response = await axios.post("http://35.243.146.103:5000/use_pass");
    console.log(response)
  }
  return { buyPass, usePass }
}

export default Pass;