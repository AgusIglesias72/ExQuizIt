import { createContext, useState } from 'react'

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState({
    title: '',
    category: '',
    description: '',
    questions: [],
  })

  return (
    <QuizContext.Provider
      value={{
        quiz,
        setQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
