import CategoriesFeatures from '@/src/Components/CategoriesFeatures'
import TwoPicsBanner from '@/src/Components/TwoPicsBanner'
import PageLayout from '@/src/Layout/PageLayout'

export default function index() {
  return (
    <PageLayout
      title="ExQuizIt - Play Quizzes"
      description="Play quizzes and have fun while learning new things."
    >
      <CategoriesFeatures />
      <TwoPicsBanner />
    </PageLayout>
  )
}
