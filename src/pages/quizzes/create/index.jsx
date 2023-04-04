import CreateQuizForm from '@/src/Components/CreateQuizForm'
import { QuizProvider } from '@/src/Context/quizContext'
import PageLayout from '@/src/Layout/PageLayout'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../api/auth/[...nextauth]'

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

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
