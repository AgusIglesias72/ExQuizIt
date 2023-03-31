import CardsContainer from '@/src/Components/CardsContainer'
import Banner from '@/src/Components/SmallComponents/Banner'
import CTACard from '@/src/Components/SmallComponents/CTA'
import TitleComponent from '@/src/Components/SmallComponents/TitleComponent'
import PageLayout from '@/src/Layout/PageLayout'

export default function Quizzes() {
  return (
    <PageLayout title="ExQuizIt - Quizzes" description="Quizzes page">
      <Banner
        text="Create your own quiz and share it with the world!"
        button="Create Quiz"
        link="/quizzes/create"
      />
      <TitleComponent
        title="Create your own quiz"
        subtitle="Choose the category, add questions, answers and share it with the world!"
        button="Create Quiz"
        link="/quizzes/create"
        withButton
      />
      <CTACard
        title="ExQuizzes"
        subtitle="Of the week"
        description="Explore our quiz special selection for this week. Based on current events, trending topics and more. Spend your time wisely and have fun while doing it."
        button="Play"
        direction="sm:order-first"
        link="/quizzes/week"
        image={
          'https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500'
        }
      />
      <CTACard
        title="Most Played"
        subtitle="ExQuizzes"
        description="All time most played quizzes. See what the community is playing and join the fun. Ideal for new players to get started."
        button="Discover"
        direction="sm:order-none"
        link="/quizzes/most-played"
        alignDirection={'text-right'}
        image={
          'https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500'
        }
      />
      <TitleComponent title="¿Which Quiz will you play today?" subtitle="" />
      <CardsContainer />
    </PageLayout>
  )
}
