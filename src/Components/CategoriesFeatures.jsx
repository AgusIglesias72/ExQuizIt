import Link from 'next/link'

const categories = [
  {
    id: 1,
    link: '/quizzes',
    title: 'Sports',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    svg: (
      <svg
        fill="currentColor"
        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 00-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 00-.552.698 5 5 0 004.503 5.152 6 6 0 002.946 1.822A6.451 6.451 0 017.768 13H7.5A1.5 1.5 0 006 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 00-1.5-1.5h-.268a6.453 6.453 0 01-.684-2.202 6 6 0 002.946-1.822 5 5 0 004.503-5.152.75.75 0 00-.552-.698A31.804 31.804 0 0016 2.562v-.387a.75.75 0 00-.629-.74A33.227 33.227 0 0010 1zM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 01-1.855-2.68zm14.95 0a3.503 3.503 0 01-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332z"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    link: '/quizzes',
    title: 'History',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    svg: (
      <svg
        fill="currentColor"
        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    link: '/quizzes',
    title: 'Music',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    svg: (
      <svg
        fill="currentColor"
        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M17.721 1.599a.75.75 0 01.279.584v11.29a2.25 2.25 0 01-1.774 2.198l-2.041.442a2.216 2.216 0 01-.938-4.333l2.662-.576a.75.75 0 00.591-.734V6.112l-8 1.73v7.684a2.25 2.25 0 01-1.774 2.2l-2.042.44a2.216 2.216 0 11-.935-4.33l2.659-.574A.75.75 0 007 12.53V4.237a.75.75 0 01.591-.733l9.5-2.054a.75.75 0 01.63.149z"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    link: '/quizzes',
    title: 'Geography',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    svg: (
      <svg
        fill="currentColor"
        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z"
        ></path>
      </svg>
    ),
  },

  {
    id: 6,
    link: '/quizzes',
    title: 'Science',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    svg: (
      <svg
        fill="currentColor"
        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
        ></path>
      </svg>
    ),
  },
  {
    id: 7,
    link: '/quizzes',
    title: 'Movies',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    svg: (
      <svg
        fill="currentColor"
        className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
      </svg>
    ),
  },
]

export default function CategoriesFeatures() {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 lg:mb-16 text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Most Played Categories
          </h2>
          <p className="text-gray-500 sm:text-xl">
            We have a wide range of categories to choose from. You can choose
            the one that suits you the most or face the challenge of playing all
            of them.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                href={category.link}
                className="flex justify-center mx-auto md:mx-0 items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12"
              >
                {category.svg}
              </Link>
              <h3 className="mb-2 text-xl font-bold text-center md:text-left">
                {category.title}
              </h3>
              <p className="text-gray-500 text-center md:text-left w-3/4 mx-auto md:mx-0 md:w-auto">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
