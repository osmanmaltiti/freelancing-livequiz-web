import axios from "axios";

const Sign = () => {
  const login = async(data, callback) => {
    const { email, password } = data;
    const login_data = {
      email,
      password
    }
    const response = await axios.post('http://localhost:5000/api/v1/users/signup', { input: login_data });
    console.log(response.data)
  }
  const signup = async(data, callback) => {
    const {Firstname, Lastname, Email, Number, Password, Confirm} = data;
    const signup_data = {
      first_name: Firstname,
      last_name: Lastname,
      email: Email,
      phone_number: Number,
      password: Password,
      confirm_password: Confirm
    }
    const response = await axios.post('http://localhost:5000/api/v1/users/signup', { input: signup_data });
    console.log(response.data)
  }
  return { login, signup }
}

export default Sign;