import { useDispatch } from "react-redux";
import { getLeaderboard, getResults } from "../redux/results-slice";
import axios from "axios";

const Results = () => {
  const dispatch = useDispatch()

  const getCurrentResults = async() => {
    const response = await axios.get("http://35.243.146.103:3001/get_current_results?user_id=1&competition_id=1");
    dispatch(getResults(response.data))
  }

  const getLeaderboards = async() => {
    const response = await axios.get("http://35.243.146.103:3001/get_leaderboard_details?user_id=1&competition_id=1");
    dispatch(getLeaderboard(response.data))
  }

  return { getCurrentResults, getLeaderboards }
}
export default Results;