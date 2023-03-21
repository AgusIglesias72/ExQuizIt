import CardsContainer from '@/src/Components/CardsContainer'
import PageLayout from '@/src/Layout/PageLayout'

export default function Quizzes() {
  return (
    <PageLayout title="ExQuizIt - Quizzes" description="Quizzes page">
      <div>
        <CardsContainer />
      </div>
    </PageLayout>
  )
}
