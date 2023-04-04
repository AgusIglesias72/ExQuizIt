import Link from 'next/link'
import React from 'react'

export default function CTACard({
  title,
  subtitle,
  description,
  button,
  direction,
  alignDirection,
  image,
  link,
}) {
  return (
    <div class="bg-white py-2 lg:py-4">
      <div class="mx-auto w-full px-4 md:px-8">
        <div class="flex flex-col overflow-hidden rounded-lg bg-blue-800 sm:flex-row md:h-80">
          <div
            class={`flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5 ${alignDirection} `}
          >
            <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              {title}
              <br />
              {subtitle}
            </h2>

            <p class="mb-8 flex justify-end text-white">{description}</p>

            <div class="mt-auto">
              <Link
                href={link}
                class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                {button}
              </Link>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  )
}
