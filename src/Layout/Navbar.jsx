import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
// I have an issue here. When doing SSR to get the Session, I get a 'module 'v8' not found' error I couldn't fix.
// This results in a micro delay in session data. Not big deal, but I would like to fix it.
// Next two imports are the ones I used in the SSR solution, same as getServerSideProps at the bottom
// import { getServerSession } from 'next-auth/next'
// import { authOptions } from '../pages/api/auth/[...nextauth]'

const BASE_URL = 'http://localhost:3001/'

const menuOptions = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Quizzes',
    path: '/quizzes',
  },
  {
    name: 'Play',
    path: '/quizzes/play',
  },
  {
    name: 'Stats',
    path: '/stats',
  },
]

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()

  const IconComponent = () => {
    const imageStyle = session
      ? { borderRadius: '50%', cursor: 'pointer' }
      : { cursor: 'pointer' }

    if (session) {
      return (
        <Link href="/profile">
          <img
            className="w-10 h-10 rounded-full"
            src={session?.user?.image}
            alt={session?.user?.image}
            style={imageStyle}
          />
        </Link>
      )
    } else {
      return (
        <Link href="/api/auth/signin">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </button>
        </Link>
      )
    }
  }

  useEffect(() => {
    setNavStatus(false)
  }, [])

  const toggleNav = () => {
    setNavStatus(!navStatus)
  }

  return (
    <>
      <nav className="bg-white px-2 py-2 sm:px-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container lg:px-10 flex flex-wrap items-center justify-between w-full mx-auto ">
          <Link href={BASE_URL} className="flex items-center">
            <img
              src="\logo\blackExquizit.svg"
              className="object-center object-cover cursor-pointer max-h-20 w-40"
              alt="Exquizit Logo"
            />
          </Link>
          <div className="flex md:order-2 gap-10">
            <IconComponent />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <menu
            className={`${
              navStatus ? '' : 'hidden'
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 md:gap-2 lg:gap-10 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menuOptions.map((option) => (
                <li key={option.path}>
                  <Link
                    href={option.path}
                    aria-current="page"
                    className={`${
                      router.pathname === option.path
                        ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                        : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    }`}
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </menu>
        </div>
      </nav>
    </>
  )
}

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions)

//   return {
//     props: {
//       session,
//     },
//   }
// }
