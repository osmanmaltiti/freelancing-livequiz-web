const QuizFunctions = () => {
    const verifyAnswer = (answer, callback) => {
        if(answer !== ''){
            if(answer === 'option 2'){
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