import { QuizContext } from '@/src/Context/quizContext'
import { mockCategory, quizInfo } from '@/src/mocks/QuizData'
import { useContext, useEffect, useState } from 'react'

const ArrowUp = () => {
  return (
    <svg
      data-accordion-icon
      className="w-6 h-6 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

const ArrowDown = () => {
  return (
    <svg
      data-accordion-icon
      className="w-6 h-6 rotate-180 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default function CreateFirst() {
  const { quiz, setQuiz } = useContext(QuizContext)
  console.log(quiz)

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value })
  }

  return (
    <div
      tabIndex="1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden flex justify-center items-center w-full"
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h3 className="text-lg font-semibold text-gray-900 ">Add Quiz</h3>
          </div>
          <form>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Title
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="title"
                  defaultValue={quiz.title}
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="World Cup 2022, Harry Potter, etc."
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Category
                </label>
                <select
                  id="category"
                  onChange={handleChange}
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {mockCategory.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700  dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a short description about your quiz."
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <svg
                  aria-hidden="true"
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Back
              </button>
              <button
                type="submit"
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
                Add Questions
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export function AddQuestions({}) {
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

  const { quiz, setQuiz } = useContext(QuizContext)

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
    console.log(newQuestions)
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
          <form onSubmit={handleSubmitQuestion}>
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
              <div className="mb-6 w-full">
                <label
                  htmlFor="question"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Question
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
                {...(quiz.questions.length < 10 && { disabled: true })}
                className={`text-white ${
                  quiz.questions.length < 10 && 'opacity-50 cursor-not-allowed'
                }  inline-flex items-center bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              >
                Finish Quiz
              </button>
              <button
                type="submit"
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
              <p className="text-red-500 text-sm mt-2 font-bold text-center">
                {error}
              </p>
            )}{' '}
          </form>
        </div>
      </div>
    </div>
  )
}

export function CheckQuestions({}) {
  const { quiz, setQuiz } = useContext(QuizContext)
  const [questions, setQuestions] = useState(quiz.questions)

  useEffect(() => {
    setQuestions(quiz.questions.reverse())
  }, [quiz.questions])

  const handleToggle = (index) => {
    const q = questions.map((question, i) => {
      if (i === index) {
        return { ...question, active: !question.active }
      }
      return question
    })
    setQuestions(q)
  }

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="max-w-2xl p-4 mx-auto"
    >
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <h2>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-1 border-gray-200 ${
                  index == 0 ? 'rounded-t-lg' : ''
                } ${
                  index == questions.length - 1 && !question.active
                    ? 'rounded-b-lg'
                    : ''
                }`}
                aria-expanded="true"
                onClick={() => handleToggle(index)}
              >
                <span>{question.question}</span>
                {question.active ? <ArrowDown /> : <ArrowUp />}
              </button>
            </h2>
            <div
              className={`${question.active ? 'block' : 'hidden'} border-b `}
            >
              <div className={`p-5 border border-b-0 border-gray-200 `}>
                <p className="mb-2 text-gray-500 font-bold">
                  Correct Answer:{' '}
                  {question.answers.find((a) => a.isCorrect === true).answer}
                </p>
                {question.answers
                  .filter((a) => a.isCorrect === false)
                  .map((a, index) => {
                    return (
                      <p className="mb-2 text-gray-500" key={index}>
                        Wrong Answer: {a.answer}
                      </p>
                    )
                  })}
                <button
                  className="text-white inline-flex items-center bg-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm mt-2 px-5 py-2.5 text-center"
                  // onClick={() => openModal(index)}
                >
                  Edit Question
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// export const Modal
