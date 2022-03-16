import axios from "axios";

const Sign = () => {
  const login = async(data, callback) => {
    const { email, password } = data;
    const login_data = {
      username: email,
      password
    }
    const response = await axios.post('http://35.243.146.103:3001/login', 
    {}, { params: {...login_data} });
    console.log(response.data)
  }
  const signup = async(data, callback) => {
    const {Firstname, Lastname, Email, Number, Password} = data;
    const signup_data = {
      first_name: Firstname,
      last_name: Lastname,
      email: Email,
      phone_number: Number,
      password: Password,
    }
    console.log(signup_data)
    const response = await axios.post('http://35.243.146.103:3001/registration',
    {}, { params: { ...signup_data } });
    console.log(response.data)
  }
  return { login, signup }
}

export default Sign;