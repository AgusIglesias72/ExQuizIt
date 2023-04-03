import { useState, useContext } from 'react'
import AddQuestions from './SmallComponents/AddQuestions'
import CheckQuestions from './SmallComponents/CheckQuestions'
import CreateFirst from './SmallComponents/CreateFirst'
import CreateQuizTitle from './SmallComponents/CreateQuizTitle'
import TitleComponent from './SmallComponents/TitleComponent'
import { QuizContext } from '@/src/Context/quizContext'
import InfoModal from './SmallComponents/Modal/QuizInfoModal'

function Stepper() {
  const { quizStep } = useContext(QuizContext)

  const steps = [
    {
      id: 1,
      title: 'Quiz',
    },
    {
      id: 2,
      title: 'Questions',
    },
    {
      id: 3,
      title: 'Confirmation',
    },
  ]

  return (
    <div>
      <ol className="flex items-center justify-between w-full px-2 md:w-2/3 md:px-0 mx-auto text-sm font-medium text-center text-gray-500  sm:text-base ">
        {steps.map((item, index) => {
          if (item.id < quizStep) {
            return (
              <li
                key={index}
                className={
                  'flex w-full items-center text-blue-600  after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 '
                }
              >
                <span
                  className={
                    'flex items-center  after:mx-2 after:text-gray-200 '
                  }
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {item.title}
                </span>
              </li>
            )
          }
          if (item.id === quizStep) {
            return (
              <li
                key={index}
                className={`flex items-center text-blue-600  
                ${
                  item.id < steps.length &&
                  'w-full after:w-full after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 '
                }
                `}
              >
                <span
                  className={
                    'flex items-center  after:mx-2 after:text-gray-200 '
                  }
                >
                  <span className="mr-2">{item.id}</span>
                  {item.title}
                </span>
              </li>
            )
          }
          if (item.id > quizStep) {
            return (
              <li
                key={index}
                className={`flex items-center text-gray-500 ${
                  item.id + 1 == steps.length &&
                  'w-full after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10'
                } `}
              >
                <span
                  className={
                    'flex items-center  after:mx-2 after:text-gray-200 '
                  }
                >
                  <span className="mr-2">{item.id}</span>
                  {item.title}
                </span>
              </li>
            )
          }
        })}
      </ol>
    </div>
  )
}

export const QuizInformation = () => {
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
  const { quizStep, quiz } = useContext(QuizContext)

  const handleStart = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStart(true)
    }, 1000)
  }

  return (
    <div className="bg-white container mx-auto max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 ">
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
