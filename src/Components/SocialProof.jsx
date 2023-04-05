import Link from 'next/link'

export default function SocialProof() {
  return (
    <section className="bg-white ">
      <div className="py-2 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Quizzes</h3>
            <p className="px-10 font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Available to play, and see how you compare to others
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">+ 1.000</span>
            </div>
            <Link
              href="/quizzes"
              className="text-white w-2/3 mx-auto bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Quiz It
            </Link>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Categories</h3>
            <p className="px-10 font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Such as: Sports, Geography, History, Science, and more.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">20</span>
            </div>
            <Link
              href="/quizzes/categories"
              className="text-white w-2/3 mx-auto bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              See All Categories
            </Link>
          </div>
          {/* <!-- Pricing Card --> */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">ExQuizzers</h3>
            <p className="px-10 font-light text-gray-500 sm:text-lg dark:text-gray-400">
              In the world, challenge them and became one of the best.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">+ 250</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <Link
              href="/stats"
              className="text-white w-2/3 mx-auto bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Top ExQuizzers
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
