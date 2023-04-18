import Link from 'next/link'

export default function TwoPicsBanner() {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Selection
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 max-w-lg mx-auto lg:w-full lg:max-w-full">
          <Link
            href="/quizzes/popular"
            className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
          >
            <img
              src="https://media.istockphoto.com/id/1305169776/photo/q-and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-on-black-background.jpg?s=612x612&w=0&k=20&c=B2pB8VIuDZ9x7AGA8UNu7Ilhzw_SF9i1m1cWOIii_U0="
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
              src="https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.jpg?s=612x612&w=0&k=20&c=hvaH_2oA0Dm-tpQ8T5JBF_39QF3xhpic38Yi2AngaCE="
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
