import { useState, useContext } from 'react'
import { QuizContext } from '@/src/Context/quizContext'

export default function AddQuestions({}) {
  const [question, setQuestion] = useState({
    question: '',
    answers: [
      { answer: '', isCorrect: true },
      { answer: '', isCorrect: false },
      { answer: '', isCorrect: false },
      { answer: '', isCorrect: false },
    ],
  })
  const [error, setError] = useState('')
  const [listOfQuestions, setListOfQuestions] = useState([])

  const { quiz, setQuiz, setQuizStep } = useContext(QuizContext)

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value })
  }

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...question.answers]
    newAnswers[index].answer = e.target.value
    setQuestion({ ...question, answers: newAnswers })
  }

  const handleSubmitQuestion = (e) => {
    e.preventDefault()
    if (question.question === '') {
      setError('Name of the question is required')
      return
    }
    if (
      question.answers.find((answer) => answer.isCorrect === true).answer === ''
    ) {
      setError('Correct answer is required')
      return
    }
    if (question.answers.filter((answer) => answer.answer !== '').length < 3) {
      setError('At least 2 wrong answers are required')
      return
    }

    const newQuestion = {
      ...question,
      id: Date.now(),
      answers: question.answers.filter((answer) => answer.answer !== ''),
    }
    const newQuestions = [...listOfQuestions, newQuestion]
    setListOfQuestions(newQuestions)
    setQuiz({ ...quiz, questions: newQuestions })
    setQuestion({
      question: '',
      answers: [
        { answer: '', isCorrect: true },
        { answer: '', isCorrect: false },
        { answer: '', isCorrect: false },
        { answer: '', isCorrect: false },
      ],
    })
    setError('')
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    setQuizStep(3)
  }

  return (
    <div
      tabIndex="1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden flex justify-center items-center w-full"
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div
          className={`relative p-4 bg-white rounded-lg shadow sm:p-5
          ${error && 'border border-red-500'}
        `}
        >
          <form onSubmit={handleNextStep}>
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
              <div className="mb-6 w-full">
                <label
                  htmlFor="question"
                  className="block mb-2 text-sm font-medium text-gray-900 flex justify-between w-full "
                >
                  Question
                  <p className="text-sm font-normal text-center text-gray-500">
                    {quiz.questions.length < 10 &&
                      `${quiz.questions.length} Added, at least 10 required`}
                  </p>
                </label>
                <input
                  type="text"
                  name="question"
                  onChange={handleChange}
                  value={question.question}
                  id="question"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="¿Who scored the first goal in the 2022 World Cup final?"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="trueAnswer"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Correct Answer
              </label>
              <input
                type="text"
                id="trueAnswer"
                name="trueAnswer"
                onChange={(e) => handleAnswerChange(e, 0)}
                value={
                  question.answers.find((answer) => answer.isCorrect).answer
                }
                placeholder="Lionel Messi"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="repeat-password"
                className="block  text-sm font-medium text-gray-900 "
              >
                Wrong Answers
              </label>
              <p className="text-gray-500 mb-4 text-sm">
                Add at least 2 wrong answers
              </p>
              <input
                type="text"
                id="falseAnswer1"
                name="falseAnswer1"
                onChange={(e) => handleAnswerChange(e, 1)}
                value={question.answers[1].answer}
                placeholder="Harry Kane"
                className="shadow-sm bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
              <input
                type="text"
                id="falseAnswer2"
                name="falseAnswer2"
                onChange={(e) => handleAnswerChange(e, 2)}
                value={question.answers[2].answer}
                placeholder="Cristiano Ronaldo"
                className="shadow-sm bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
              <input
                type="text"
                id="falseAnswer3"
                name="falseAnswer3"
                onChange={(e) => handleAnswerChange(e, 3)}
                value={question.answers[3].answer}
                placeholder="Kylian Mbappé"
                className="shadow-sm bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                {...(quiz.questions.length < 3 && { disabled: true })}
                className={`text-white ${
                  quiz.questions.length < 3 && 'opacity-50 cursor-not-allowed'
                }  inline-flex items-center bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              >
                Finish Quiz
              </button>

              <button
                type="button"
                onClick={handleSubmitQuestion}
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Next Question
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2 font-semibold text-center">
                {error}
              </p>
            )}{' '}
          </form>
        </div>
      </div>
    </div>
  )
}
