import React from 'react'

export default function CTACard({
  title,
  subtitle,
  description,
  button,
  direction,
  alignDirection,
  image,
}) {
  return (
    <div class="bg-white py-2 lg:py-4">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
          {/* <!-- content - start --> */}
          <div
            class={`flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5 ${alignDirection}`}
          >
            <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              {title}
              <br />
              {subtitle}
            </h2>

            <p class="mb-8 max-w-md text-gray-400">{description}</p>

            <div class="mt-auto">
              <a
                href="#"
                class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                {button}
              </a>
            </div>
          </div>
          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <div
            class={`order-first h-48 w-full bg-gray-700 ${direction} sm:h-auto sm:w-1/2 lg:w-3/5`}
          >
            <img
              src={image}
              loading="lazy"
              alt="Photo by Dom Hill"
              class="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  )
}
