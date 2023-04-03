import { useState, useContext, useEffect } from 'react'
import { ArrowDown, ArrowUp } from './Icons/Arrows'
import { QuizContext } from '@/src/Context/quizContext'
import QuestionModal from './Modal/QuestionModal'

export default function CheckQuestions({}) {
  const { quiz } = useContext(QuizContext)
  const [modalShow, setModalShow] = useState(false)

  const [modalQuestion, setModalQuestion] = useState({
    question: '',
    answers: [],
    id: '',
  })

  const handleModal = () => {
    setModalShow(!modalShow)
  }

  const openModal = (question) => {
    setModalQuestion({
      ...question,
    })
    setModalShow(true)
  }

  const [questions, setQuestions] = useState(quiz.questions)

  useEffect(() => {
    setQuestions(quiz.questions.sort((a, b) => b.id - a.id))
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
      className="max-w-2xl py-4 px-0 mx-auto"
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
                {modalShow && (
                  <QuestionModal
                    closeModal={handleModal}
                    show={modalShow}
                    question={modalQuestion}
                  />
                )}

                <button
                  className="text-white inline-flex items-center bg-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm mt-2 px-5 py-2.5 text-center"
                  onClick={() => openModal(question)}
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
