import axios from "axios"
import { useDispatch } from "react-redux";
import { getAllCompetitions } from "../redux/competition-slice";

const Competition = () => {
  const dispatch = useDispatch()
  const getCompetitions = async() => {
    const response = await axios.post('http://localhost:5000/get_competitions');
    dispatch(getAllCompetitions(response.data))
  }

  const checkCompetition = async() => {
    const response = await axios.post('http://localhost:5000/check_user_competitions');
    console.log(response.data)
  }
  return { getCompetitions, checkCompetition }
}

export default Competition;