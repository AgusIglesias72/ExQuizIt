export const Statistic = ({ ...props }) => {
  const { mail, name, image } = props

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="grid gap-12 lg:gap-24 row-gap-8 lg:grid-cols-5">
        <div className="grid gap-8 lg:col-span-2 place-items-center text-center lg:place-items-start lg:text-left">
          <div>
            <img
              className="w-30 h-30 rounded-full"
              src={image}
              alt="Rounded avatar"
            />
          </div>
          <div>
            <p className="text-lg font-bold">Nombre</p>
            <p className="text-gray-700">{name}</p>
          </div>
          <div>
            <p className="text-lg font-bold">E-Mail</p>
            <p className="text-gray-700">{mail}</p>
          </div>
          <div>
            <p className="text-lg font-bold">Nombre</p>
            <p className="text-gray-700">Agustín Iglesias</p>
          </div>
        </div>
        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between text-center sm:text-left p-4 sm:p-10">
            <div>
              <p className="text-lg font-semibold text-gray-500 sm:text-base">
                Quizzes Completed
              </p>
              <p className="text-2xl mb-6 lg:mb-0 font-bold text-deep-purple-accent-400 sm:text-xl">
                45
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-500 sm:text-base">
                Quiz Score
              </p>
              <p className="text-2xl mb-6 lg:mb-0 font-bold text-deep-purple-accent-400 sm:text-xl">
                89%
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-500 sm:text-base">
                Correct Answers
              </p>
              <p className="text-2xl mb-6 lg:mb-0 font-bold text-deep-purple-accent-400 sm:text-xl">
                89/160
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between text-center sm:text-left p-4 sm:p-10">
            <div>
              <p className="text-lg font-semibold text-gray-500 sm:text-base">
                Quizzes Created
              </p>
              <p className="text-2xl mb-6 lg:mb-0 font-bold text-deep-purple-accent-400 sm:text-xl">
                12
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-500 sm:text-base">
                Most Played Category
              </p>
              <p className="text-2xl mb-6 lg:mb-0 font-bold text-deep-purple-accent-400 sm:text-xl">
                Sports
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-500 sm:text-base">
                Ranking
              </p>
              <p className="text-2xl mb-6 lg:mb-0 font-bold text-deep-purple-accent-400 sm:text-xl">
                213°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
