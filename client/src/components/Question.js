const Question = ({ question, nextQuestion, checkAnswer }) => {
  const handleClick = (value) => {
    checkAnswer(value)
    nextQuestion()
  }

  return (
    <div>
      <h1>{question.question}</h1>
      <ul>
        {question.answers.map(answer => (
          <li key={answer}>
            <button onClick={(e) => handleClick(e.target.innerHTML)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
