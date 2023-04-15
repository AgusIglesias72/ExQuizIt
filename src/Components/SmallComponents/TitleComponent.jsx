import Link from 'next/link'

export default function TitleComponent({
  title,
  subtitle,
  button,
  link,
  withButton,
}) {
  return (
    <div className="max-w-screen-xl flex flex-col justify-center items-center px-2 text-center w-full md:mx-auto md:w-2/3 pt-3 lg:pt-6">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {subtitle}
      </p>
      {withButton && (
        <Link
          href={link}
          className="inline-flex items-center justify-center px-5 py-3 w-2/3 md:w-1/3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          {button}
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
      )}
    </div>
  )
}
