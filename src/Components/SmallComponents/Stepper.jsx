import { useContext } from 'react'
import { QuizContext } from '@/src/Context/quizContext'

export function Stepper() {
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
