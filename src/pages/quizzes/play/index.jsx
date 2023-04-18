import CardsContainer from '@/src/Components/CardsContainer'
import PageLayout from '@/src/Layout/PageLayout'
import PlayHeroSection from '../../../Components/PlayHeroSection'

export default function index() {
  return (
    <PageLayout
      title="ExQuizIt - Play Quizzes"
      description="Play quizzes and have fun while learning new things."
    >
      <PlayHeroSection />
      <CardsContainer />
    </PageLayout>
  )
}
