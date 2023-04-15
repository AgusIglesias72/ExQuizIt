import { useState, useContext } from 'react'
import { QuizContext } from '@/src/Context/quizContext'

export default function QuestionModal({ closeModal, show, question }) {
  const { quiz, setQuiz } = useContext(QuizContext)
  const [error, setError] = useState('')

  const [questionInfo, setQuestionInfo] = useState({
    question: question.question,
    answers: question.answers,
    id: question.id,
  })

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...questionInfo.answers]
    if (newAnswers[index]) {
      newAnswers[index].answer = e.target.value
    } else if (!newAnswers[index]) {
      newAnswers.push({ answer: e.target.value, isCorrect: false })
    }
    setQuestionInfo({ ...questionInfo, answers: newAnswers })
  }

  const handleChange = (e) => {
    setQuestionInfo({ ...question, [e.target.name]: e.target.value })
  }

  const handleClose = () => {
    setQuestionInfo(quiz.questions.find((q) => q.id === questionInfo.id))
    setError('')
    closeModal()
  }

  const updateInfo = (e) => {
    e.preventDefault()
    if (questionInfo.question === '')
      return setError('Name of the question is required')
    if (
      questionInfo.answers.find((answer) => answer.isCorrect === true)
        .answer === ''
    ) {
      setError('Correct answer is required')
      return
    }
    if (
      questionInfo.answers.filter((answer) => answer.answer !== '').length < 3
    ) {
      setError('At least 2 wrong answers are required')
      return
    }

    const updatedQuestion = {
      ...questionInfo,
      answers: questionInfo.answers.filter((answer) => answer.answer !== ''),
    }

    setQuiz({
      ...quiz,
      questions: quiz.questions.map((q) =>
        q.id === updatedQuestion.id ? updatedQuestion : q
      ),
    })

    setError('')
    closeModal()
  }

  return (
    <div
      id="updateProductModal"
      tabIndex="-1"
      aria-hidden="true"
      className={`overflow-y-auto ${
        show ? '' : 'hidden'
      } overflow-x-hidden fixed z-20  flex w-full h-full inset-0  outline-none justify-center items-center`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="relative p-4 w-full max-w-2xl h-full ">
        <div
          className={`relative p-4 bg-white rounded-lg shadow-2xl sm:p-5 ${
            error && 'border border-red-500'
          }`}
        >
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h3 className="text-lg font-semibold text-gray-900">
              Update Question
            </h3>
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="updateProductModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={updateInfo}>
            <div className="grid gap-4 mb-4 sm:grid-cols-1">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Question
                </label>
                <input
                  type="text"
                  name="question"
                  id="name"
                  value={questionInfo.question}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Taylor Swift was born in..."
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Correct Answer
                </label>
                <input
                  type="text"
                  id="trueAnswer"
                  name="trueAnswer"
                  value={
                    question.answers.find((a) => a.isCorrect === true).answer
                  }
                  onChange={(e) => handleAnswerChange(e, 0)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="United States"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Wrong Answer
                </label>
                <input
                  type="text"
                  id="falseAnswer1"
                  name="falseAnswer1"
                  value={question.answers[1].answer}
                  onChange={(e) => handleAnswerChange(e, 1)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="France"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Wrong Answer
                </label>
                <input
                  type="text"
                  id="falseAnswer2"
                  name="falseAnswer2"
                  value={question?.answers[2]?.answer}
                  onChange={(e) => handleAnswerChange(e, 2)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Jamaica"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Wrong Answer
                </label>
                <input
                  type="text"
                  id="falseAnswer3"
                  name="falseAnswer3"
                  value={question?.answers[3]?.answer}
                  onChange={(e) => handleAnswerChange(e, 3)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="United Kingdom"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Update Question
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="text-red-600 inline-flex justify-between items-center hover:text-white border border-red-600 hover:bg-red-600   font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <svg
                  aria-hidden="true"
                  className="mr-1 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Close
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2 font-semibold text-left">
                {error}
              </p>
            )}{' '}
          </form>
        </div>
      </div>
    </div>
  )
}
