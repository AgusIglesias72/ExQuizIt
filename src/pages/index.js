import { Inter } from 'next/font/google'
import HeroSection from '../Components/HeroSection'
import Newslatter from '../Components/Newslatter'
import SocialProof from '../Components/SocialProof'
import TwoPicsBanner from '../Components/TwoPicsBanner'
import PageLayout from '../Layout/PageLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <SocialProof />
      <TwoPicsBanner />
      <Newslatter />
    </PageLayout>
  )
}
