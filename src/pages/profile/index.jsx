import { useSession, signIn, signOut } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import PageLayout from '@/src/Layout/PageLayout'
import { Statistic } from '@/src/Components/ProfileStats'
import Link from 'next/link'
import TableData from '@/src/Components/TableData'

export default function Profile() {
  const { data: session } = useSession()

  return (
    <PageLayout title="ExQuizIt - Profile" description="Profile page">
      <div>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            <Statistic
              mail={session.user?.email}
              name={session.user?.name}
              image={session.user?.image}
            />
            <div className="flex flex-row items-center justify-center md:w-2/3 lg:w-1/3 px-10 md:px-0 mx-auto gap-5 pb-10">
              <Link
                href="/quizzes/play"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <button type="button">ExQuiz</button>
              </Link>

              <button
                type="button"
                className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
            <TableData />
          </>
        )}
      </div>
    </PageLayout>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
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
