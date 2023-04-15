import { useState, useContext } from 'react'
import AddQuestions from './SmallComponents/AddQuestions'
import CheckQuestions from './SmallComponents/CheckQuestions'
import CreateFirst from './SmallComponents/CreateFirst'
import CreateQuizTitle from './SmallComponents/CreateQuizTitle'
import TitleComponent from './SmallComponents/TitleComponent'
import { QuizContext } from '@/src/Context/quizContext'
import InfoModal from './SmallComponents/Modal/QuizInfoModal'
import { Stepper } from './SmallComponents/Stepper'
import Link from 'next/link'

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
  const { quizStep, quiz, session, setQuizStep, setQuiz } =
    useContext(QuizContext)
  const [reqInfo, setReqInfo] = useState({
    show: false,
    message: '',
  })
  const [postLoading, setPostLoading] = useState(false)

  const handleStart = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStart(true)
    }, 600)
  }

  const submitQuiz = async () => {
    setPostLoading(true)
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

    if (response.status === 201) {
      setQuizStep(4)

      setQuiz({
        title: '',
        category: '',
        description: '',
        questions: [],
      })
    }

    setReqInfo({
      show: true,
      message: data.message,
    })
    setPostLoading(false)
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
                  onClick={() => {
                    setQuizStep(2)
                  }}
                  className="text-white mb-2 text-center inline-flex items-center bg-primary-500 hover:bg-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
                >
                  Add More Questions
                </button>
                {postLoading ? (
                  <button
                    disabled
                    type="button"
                    className="text-white text-center inline-flex items-center bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline mr-3 ml-1 w-6 h-6text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submitQuiz}
                    className="text-white text-center inline-flex items-center bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
                  >
                    <svg
                      className="mr-1  w-6 h-6"
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
                )}

                {reqInfo.show && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
                    role="alert"
                  >
                    <strong className="font-bold">Error! </strong>
                    <span className="block sm:inline">{reqInfo.message}</span>
                  </div>
                )}
              </div>
            </>
          )}
          {quizStep === 4 && (
            <>
              <div className="min-h-[300px]"></div>
              <div
                id="successModal"
                tabIndex="50"
                aria-hidden="true"
                className="overflow-y-auto overflow-x-hidden fixed z-20 flex w-full h-full inset-0 outline-none justify-center items-center"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
              >
                <div className="relative p-4 w-full max-w-md h-auto">
                  <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <Link href="/">
                      <button
                        type="button"
                        className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="successModal"
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
                    </Link>
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Success</span>
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                      Quiz Uploaded Successfully
                    </p>
                    <Link href="/">
                      <button
                        data-modal-toggle="successModal"
                        type="button"
                        className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                      >
                        Go to Main Page
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
