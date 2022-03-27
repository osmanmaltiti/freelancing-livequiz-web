import { useDispatch } from "react-redux";
import { getLeaderboard, getResults } from "../redux/results-slice";
import axios from "axios";

const Results = () => {
  const dispatch = useDispatch()

  const getCurrentResults = async() => {
    const response = await axios.get("http://localhost:5000/leaderboard");
    dispatch(getResults(response.data))
  }

  const getLeaderboards = async() => {
    const response = await axios.get("http://localhost:5000/get_leaderboard_details");
    dispatch(getLeaderboard(response.data))
  }

  return { getCurrentResults, getLeaderboards }
}
export default Results;