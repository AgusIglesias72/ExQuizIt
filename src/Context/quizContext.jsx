import { createContext, useState } from 'react'

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState({
    title: '',
    category: '',
    description: '',
    questions: [],
  })

  const [quizStep, setQuizStep] = useState(1)

  return (
    <QuizContext.Provider
      value={{
        quiz,
        setQuiz,
        quizStep,
        setQuizStep,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
