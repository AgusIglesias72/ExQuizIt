import React, { useState } from 'react'

export default function CreateQuizForm() {
  return (
    <div className="bg-white container mx-auto max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <Stepper />
      <div>CreateQuizForm</div>
    </div>
  )
}

function Stepper() {
  const [step, setStep] = useState(2)

  const handleStep = (step) => {
    setStep(step)
  }

  const steps = [
    {
      id: 1,
      title: 'Personal',
    },
    {
      id: 2,
      title: 'Account',
    },
    {
      id: 3,
      title: 'Confirmation',
    },
  ]

  return (
    <div>
      <ol class="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base ">
        {steps.map((item, index) => {
          if (item.id < step) {
            return (
              <li
                key={index}
                className={
                  'flex w-full items-center text-blue-600  after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700'
                }
              >
                <span
                  className={
                    'flex items-center  after:mx-2 after:text-gray-200 '
                  }
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {item.title}
                </span>
              </li>
            )
          }
          if (item.id === step) {
            return (
              <li
                key={index}
                className={
                  'flex w-full items-center text-blue-600  after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700'
                }
              >
                <span
                  className={
                    'flex items-center  after:mx-2 after:text-gray-200 '
                  }
                >
                  <span class="mr-2">{item.id}</span>
                  {item.title}
                </span>
              </li>
            )
          }
          if (item.id > step) {
            return (
              <li
                key={index}
                className={`flex items-center text-gray-500 ${
                  item.id + 1 == steps.length && 'w-full after:w-full'
                } after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
              >
                <span
                  className={
                    'flex items-center  after:mx-2 after:text-gray-200 '
                  }
                >
                  <span class="mr-2">{item.id}</span>
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
//                     }
//                 <li key={index}
//                 className = {
//                     item.id < step ? ('flex w-full items-center text-blue-600  after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700') : (
//                         item.id === step ? ('flex items-center  after:mx-2 after:text-blue-200 ') : ('flex items-center')
//                     )
//                 }
//                 >
//                     <span className = {

//         }

//       <li class="flex w-full items-center text-blue-600  after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
//         <span class="flex items-center  after:mx-2 after:text-gray-200 ">
//           <svg
//             aria-hidden="true"
//             class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//           Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
//         </span>
//       </li>
//       <li class="flex w-full items-center after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
//         <span class="flex items-center  after:mx-2 after:text-gray-200 ">
//           <span class="mr-2">2</span>
//           Account <span class="hidden sm:inline-flex sm:ml-2">Info</span>
//         </span>
//       </li>
//       <li class="flex items-center">
//         <span class="mr-2">3</span>
//         Confirmation
//       </li>
//     </ol>
//   )
// }
