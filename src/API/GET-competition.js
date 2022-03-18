import axios from "axios"
import { useDispatch } from "react-redux";
import { getAllCompetitions } from "../redux/competition-slice";

const Competition = () => {
  const dispatch = useDispatch()
  
  const getCompetitions = async() => {
    const response = await axios.get('http://35.243.146.103:3001/get_competitions');
    dispatch(getAllCompetitions(response.data))
  }

  const checkCompetition = async(callback) => {
    const { data } = await axios.post("http://35.243.146.103:3001/check_user_competitions",
    {},
    {
      params: {
        user_id: 1,
        competition_id: 1
      }
    });
    if(data) callback(data.status);
  }
  return { getCompetitions, checkCompetition }
}

export default Competition;
