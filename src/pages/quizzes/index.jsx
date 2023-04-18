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
        link="/quizzes/popular"
        image={
          'https://media.istockphoto.com/id/1308986719/photo/yellow-question-mark-on-a-background-of-black-signs-faq-concept.jpg?s=612x612&w=0&k=20&c=srBs9yiEVvvzLA_qFi_dIKcLTxbeQAdxRnonnZBppzs='
        }
      />
      <CTACard
        title="Selected for you"
        subtitle="ExQuizzes"
        description="All time most played quizzes. See what the community is playing and join the fun. Ideal for new players to get started."
        button="Discover"
        direction="sm:order-none"
        link="/quizzes/recomendations"
        alignDirection={'text-right'}
        image={
          'https://media.istockphoto.com/id/1357386381/photo/businessman-using-smart-phone-with-business-global-internet-connection-application-technology.jpg?s=612x612&w=0&k=20&c=X123VEfPih5impwkQQ2BTzgNN2lxtgP1Bj0BXuROKco='
        }
      />
      <TitleComponent title="¿Which Quiz will you play today?" subtitle="" />
      <CardsContainer />
    </PageLayout>
  )
}
