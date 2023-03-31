import CreateQuizForm from '@/src/Components/CreateQuizForm'
import { QuizProvider } from '@/src/Context/quizContext'
import PageLayout from '@/src/Layout/PageLayout'

export default function CreateQuiz() {
  return (
    <QuizProvider>
      <PageLayout
        title="ExQuizIt - Create Quiz"
        description="Create your own quiz and share it with the world!"
      >
        <CreateQuizForm />
      </PageLayout>
    </QuizProvider>
  )
}
