import { useState, useContext } from 'react'
import AddQuestions from './SmallComponents/AddQuestions'
import CheckQuestions from './SmallComponents/CheckQuestions'
import CreateFirst from './SmallComponents/CreateFirst'
import CreateQuizTitle from './SmallComponents/CreateQuizTitle'
import TitleComponent from './SmallComponents/TitleComponent'
import { QuizContext } from '@/src/Context/quizContext'
import InfoModal from './SmallComponents/Modal/QuizInfoModal'
import { Stepper } from './SmallComponents/Stepper'

const QuizInformation = () => {
  const { quiz } = useContext(QuizContext)
  const [modalShow, setModalShow] = useState(false)

  const handleModal = () => {
    setModalShow(!modalShow)
  }

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="max-w-2xl py-4 px-0 mx-auto flex flex-col gap-4 sm:flex-row items-center flex-wrap justify-between"
    >
      <div>
        <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900">
          {quiz.title}{' '}
          <span className="text-gray-500 font-normal">
            {' - '}
            {quiz.category}
          </span>
        </h1>
        <p className="text-gray-500 font-normal">
          ({quiz.questions.length} questions)
        </p>
        <p className="text-lg font-normal text-gray-500 lg:text-xl ">
          {quiz.description}
        </p>{' '}
      </div>
      <button
        type="button"
        onClick={handleModal}
        className="text-white inline-flex items-center bg-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm px-20 py-4 sm:px-6 sm:py-3.5 text-center"
      >
        Edit Info
      </button>
      <InfoModal closeModal={handleModal} show={modalShow} />
    </div>
  )
}

export default function CreateQuizForm() {
  const [start, setStart] = useState(false)
  const [loading, setLoading] = useState(false)
  const { quizStep, quiz, session } = useContext(QuizContext)

  const handleStart = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStart(true)
    }, 600)
  }

  const submitQuiz = async () => {
    const response = await fetch(`/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quiz,
        user: session.user,
      }),
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="bg-white container mx-auto max-w-screen-xl px-4 pb-4 mx-auto lg:gap-8 xl:gap-0 ">
      {!start && (
        <CreateQuizTitle
          startQuiz={() => {
            handleStart()
          }}
          loading={loading}
        />
      )}
      {start && (
        <>
          <TitleComponent
            title="Create your own Quiz"
            subtitle="Complete the following steps to create your own quiz."
          />
          <Stepper />

          {quizStep === 1 && (
            <>
              <CreateFirst />
            </>
          )}
          {quizStep === 2 && (
            <>
              <div className="max-w-screen-xl flex flex-col justify-center items-center px-2 text-center w-full md:mx-auto md:w-2/3 pt-6">
                <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900">
                  Add at least 10 questions to your quiz.
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
                  Don't worry, you can edit them below or later.
                </p>
              </div>
              <AddQuestions />
              <CheckQuestions />
            </>
          )}
          {quizStep === 3 && (
            <>
              <div className="max-w-screen-xl flex flex-col justify-center items-center px-2 text-center w-full md:mx-auto md:w-2/3 pt-6">
                <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900">
                  Quiz Details
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
                  Please check your quiz details and confirm.
                </p>
              </div>
              <QuizInformation />
              <CheckQuestions />
              <div className="max-w-2xl mx-auto">
                <button
                  type="button"
                  onClick={submitQuiz}
                  className="text-white text-center inline-flex items-center bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
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
                  Upload Quiz
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
