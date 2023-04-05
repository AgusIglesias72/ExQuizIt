import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function HeroSection() {
  const { data: session } = useSession()

  return (
    <section className="bg-white container mx-auto">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
        <div className="lg:col-span-7 w-full">
          <h1 className="max-w-2xl mb-4 lg:mb-10 text-4xl text-center lg:text-left mx-auto font-extrabold text-gray-900 md:text-5xl ">
            Choose from our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-800 from-sky-400">
              +1000 amazing ExQuizIts
            </span>
          </h1>
          <p className="max-w-2xl mb-6 mx-4 lg:mx-auto font-normal text-gray-500 lg:mb-10 md:text-lg lg:text-xl text-center lg:text-left mx-auto">
            Play and create quizzes. Share them with your friends and family.
            Have fun while learning new things.
          </p>
          <div className="max-w-2xl text-center lg:text-left mx-auto">
            <Link
              href="/quizzes"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
            >
              Start Quizing
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              {session ? 'My Account' : 'Create Account'}
            </Link>
          </div>
        </div>
        <div className="w-2/3 pt-10 lg:w-auto mx-auto lg:mt-0 lg:col-span-5 lg:flex ">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  )
}
