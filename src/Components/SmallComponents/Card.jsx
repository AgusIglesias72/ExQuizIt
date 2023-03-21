import Link from 'next/link'

export default function Card({ object, direction }) {
  const { category, difficulty, title, description, image, link, quantity } =
    object

  return (
    <div class="flex flex-row max-h-44 md:max-h-80  items-between bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-md md:max-w-md lg:max-w-md  hover:bg-gray-100">
      <img
        class="object-cover object-center overflow-hidden w-2/5 min-h-max h-auto md:rounded-none md:rounded-l-lg"
        src="https://flowbite.com/docs/images/blog/image-4.jpg"
        alt=""
      />
      <div
        class={`flex flex-col justify-between max-w-3/5 w-3/5 px-4 py-2 leading-normal ${direction} md:order-none`}
      >
        <div class="flex flex-row justify-between items-center">
          <p class="font-normal text-gray-700  ">{category}</p>
          <p class="font-normal text-gray-400  ">{difficulty}</p>
        </div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 ">{description}</p>
        <div className="flex flex-row justify-between items-center">
          <p class="font-normal text-gray-700  w-1/2">{quantity} Questions</p>
          <Link
            href="#"
            class={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${direction} md:order-none`}
          >
            Play Quiz
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
