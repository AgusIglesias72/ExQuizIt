import { QuizContext } from '@/src/Context/quizContext'
import { mockCategory } from '@/src/mocks/QuizData'
import { useContext, useState } from 'react'

export default function CreateFirst() {
  const { quiz, setQuiz, setQuizStep } = useContext(QuizContext)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value })
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    if (quiz.title === '') return setError('Title is required')
    if (quiz.title.length < 3)
      return setError('Title must be at least 3 characters long')
    if (quiz.category === '') return setError('Category is required')
    setQuizStep(2)
  }

  return (
    <div
      tabIndex="1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden flex justify-center items-center w-full"
    >
      <div
        className="relative p-4 w-full max-w-2xl h-full md:h-auto 
      
      "
      >
        <div
          className={`relative p-4 bg-white rounded-lg shadow sm:p-5 ${
            error && 'border border-red-500'
          }`}
        >
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h3 className="text-lg font-semibold text-gray-900 ">Add Quiz</h3>
          </div>
          <form onSubmit={handleNextStep}>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   "
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5   "
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
                  Description{' '}
                  <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500   "
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

// export const Modal
