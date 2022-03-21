import axios from "axios";

const Sign = () => {
  const login = async(data, callback) => {
    const { email, password } = data;
    const login_data = {
      username: email,
      password
    }
    const response = await axios.post('http://35.243.146.103:3001/login', 
    { ...login_data });
    
    console.log(response)
    localStorage.setItem("token", JSON.stringify(response.data.token));
    const user = { ...response.data };
    delete user.token;
    localStorage.setItem("currentUser", JSON.stringify(user));
    callback();
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
    const response = await axios.post('http://35.243.146.103:3001/registration',
    { ...signup_data });
    
    console.log(response)
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("currentUser", JSON.stringify(response.data.data));
    callback();
  }
  return { login, signup }
}

export default Sign;