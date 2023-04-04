import { createContext, useState } from 'react'
import { useSession } from 'next-auth/react'

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState({
    title: '',
    category: '',
    description: '',
    questions: [],
  })

  const [quizStep, setQuizStep] = useState(1)
  const { data: session } = useSession()

  return (
    <QuizContext.Provider
      value={{
        quiz,
        setQuiz,
        quizStep,
        setQuizStep,
        session,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
