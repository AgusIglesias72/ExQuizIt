import Link from 'next/link'

export default function TwoPicsBanner() {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Collections
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white
        rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8
        dark:bg-gray-800 dark:text-white */}
        <div className="grid gap-6 lg:grid-cols-2 max-w-lg mx-auto lg:w-full lg:max-w-full">
          <Link
            href="/quizzes/popular"
            className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="relative flex flex-col">
              <span className="text-gray-300">Most Played Quizzes</span>
              <span className="text-lg font-semibold text-white lg:text-xl">
                Popular
              </span>
            </div>
          </Link>

          <Link
            href="/quizzes/recomendations"
            className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="relative flex flex-col">
              <span className="text-gray-300">Weekly Selection</span>
              <span className="text-lg font-semibold text-white lg:text-xl">
                Recommended
              </span>
            </div>
          </Link>
          {/* <!-- product - end --> */}
        </div>
      </div>
    </div>
  )
}
