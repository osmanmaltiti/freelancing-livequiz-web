const QuizFunctions = () => {
    const verifyAnswer = (answer, callback) => {
        if(answer !== ''){
            if(answer === 'Santiago' || answer === '9 feet' || answer === '6' || answer === '4'){
                callback('correct')
            } else {
                callback('wrong')
            }
        }
        else callback('wrong')
    }
    return { verifyAnswer }
}

export default QuizFunctions;