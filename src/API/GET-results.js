const Results = () => {
  const getCurrentResults = () => {
    const response = await axios.post("http://35.243.146.103:5000/get_current_results");
    console.log(response)
  }
  const getLeaderboard = () => {
    const response = await axios.post("http://35.243.146.103:5000/get_leaderboard_details");
    console.log(response)
  }
  return { getCurrentResults, getLeaderboard }
}
export default Results