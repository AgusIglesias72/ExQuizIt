import { useState, useContext } from 'react'
import { QuizContext } from '@/src/Context/quizContext'
import { mockCategory } from '@/src/mocks/QuizData'

export default function InfoModal({ closeModal, show }) {
  const { quiz, setQuiz } = useContext(QuizContext)
  const [error, setError] = useState('')

  const [quizInfo, setQuizInfo] = useState({
    title: quiz.title,
    description: quiz.description,
    category: quiz.category,
  })

  const handleChange = (e) => {
    setQuizInfo({ ...quizInfo, [e.target.name]: e.target.value })
  }

  const handleClose = () => {
    setQuizInfo({
      title: quiz.title,
      description: quiz.description,
      category: quiz.category,
    })
    setError('')
    closeModal()
  }

  const updateInfo = (e) => {
    e.preventDefault()
    if (quizInfo.title === '') return setError('Title is required')
    if (quizInfo.title.length < 3)
      return setError('Title must be at least 3 characters long')
    if (quizInfo.category === '') return setError('Category is required')

    setQuiz({
      ...quiz,
      title: quizInfo.title,
      description: quizInfo.description,
      category: quizInfo.category,
    })
    setError('')
    closeModal()
  }

  return (
    <div
      id="updateProductModal"
      tabIndex="-1"
      aria-hidden="true"
      class={`overflow-y-auto ${
        show ? '' : 'hidden'
      } overflow-x-hidden fixed z-20  flex w-full h-full inset-0 top-20 outline-none justify-center items-center`}
    >
      <div class="relative p-4 w-full max-w-2xl h-full ">
        <div
          class={`relative p-4 bg-white rounded-lg shadow-2xl sm:p-5 ${
            error && 'border border-red-500'
          }`}
        >
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h3 class="text-lg font-semibold text-gray-900">
              Update Quiz Info
            </h3>
            <button
              type="button"
              onClick={handleClose}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="updateProductModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={updateInfo}>
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Quiz Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  value={quizInfo.title}
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Ex. Apple iMac 27&ldquo;"
                />
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Category
                </label>
                <select
                  id="category"
                  onChange={handleChange}
                  value={quizInfo.category}
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
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={quizInfo.description}
                  onChange={handleChange}
                  rows="5"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                  placeholder="Write a description..."
                >
                  {quizInfo.description}
                </textarea>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button
                type="submit"
                class="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Update product
              </button>
              <button
                type="button"
                onClick={handleClose}
                class="text-red-600 inline-flex justify-between items-center hover:text-white border border-red-600 hover:bg-red-600   font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <svg
                  aria-hidden="true"
                  class="mr-1 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
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
