const QuizFunctions = () => {
    const verifyAnswer = (answer, callback) => {
        if(answer !== ''){
            if(answer === 'Santiago'){
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