import Card from './SmallComponents/Card'
import { mockCards, mockCategory } from '../mocks/QuizData'
import { useEffect, useState } from 'react'

const CategoryFilters = ({ activeCategory, setActiveCategory }) => {
  return (
    <ul className="flex flex-row">
      {mockCategory.map((category) => {
        return (
          <li
            className="mr-2 "
            onClick={(e) => {
              setActiveCategory(e.target.id)
            }}
          >
            <div
              id={category}
              className={
                activeCategory === category
                  ? 'inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active'
                  : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 '
              }
              style={{ cursor: 'pointer' }}
            >
              {category}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const Pagination = ({ pagination, handlePageChange, page }) => {
  const lastAndNext = (page) => {
    if (pagination.length <= 5) {
      return pagination
    }
    if (page === 1 || page === 2) {
      return [1, 2, 3, 4, 5]
    } else if (page === pagination.length || page === pagination.length - 1) {
      return [
        pagination.length - 4,
        pagination.length - 3,
        pagination.length - 2,
        pagination.length - 1,
        pagination.length,
      ]
    } else {
      return [page - 2, page - 1, page, page + 1, page + 2]
    }
  }

  let paginationArray = lastAndNext(page)

  return (
    <nav
      className="
        flex flex-row justify-center items-center w-full
        "
    >
      <ul className="flex flex-row w-full justify-center">
        <li>
          <div
            onClick={() => handlePageChange(page === 1 ? page : page - 1)}
            className="px-6 cursor-pointer py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </div>
        </li>
        {paginationArray.map((name) => {
          return (
            <li onClick={() => handlePageChange(name)} key={name}>
              <div
                className={
                  page === name
                    ? 'px-6 cursor-pointer py-2 leading-tight text-purple-600 border border-gray-300 bg-purple-100 hover:bg-purple-100 hover:text-purple-700'
                    : 'px-6 cursor-pointer py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                }
              >
                {name}
              </div>
            </li>
          )
        })}

        <li>
          <div
            onClick={() =>
              handlePageChange(page === pagination.length ? page : page + 1)
            }
            className="px-6 cursor-pointer py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default function CardsContainer({}) {
  const [page, setPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredQuizzes = mockCards.filter((quiz) => {
    if (activeCategory === 'All') {
      return true
    } else {
      return quiz.category === activeCategory
    }
  })

  useEffect(() => {
    setPage(1)
  }, [activeCategory])

  let pagination = [...Array(Math.ceil(filteredQuizzes.length / 6)).keys()]

  pagination = pagination.map((name) => name + 1)

  const handlePageChange = (page) => {
    setPage(page)
  }

  return (
    <div className="bg-white mx-auto py-8 lg:px-10">
      <div className="pb-5 mb-5 max-w-screen-xl  flex flex-col flex-wrap w-full lg:flex-row justify-center md:justify-between items-center gap-4 gap-x-10 lg:gap-0 mx-auto w-full text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
        <div className="">
          <CategoryFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        <div className="">
          <Pagination
            pagination={pagination}
            handlePageChange={handlePageChange}
            page={page}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-4 lg:gap-y-8 justify-evenly items-center">
        {filteredQuizzes
          .slice(
            (page - 1) * 6,
            page === pagination.length ? mockCards.length : page * 6
          )
          .map((card, index) => {
            return (
              <Card
                key={index}
                object={card}
                direction={index % 2 === 0 ? 'order-none' : 'order-first'}
              />
            )
          })}
        <div className="pt-2 mt-2 flex flex-col flex-wrap w-full lg:flex-row justify-center md:justify-around items-center gap-4 gap-x-10 lg:gap-0 mx-auto w-full text-sm font-medium text-center text-gray-500 ">
          <Pagination
            pagination={pagination}
            handlePageChange={handlePageChange}
            page={page}
          />
        </div>
      </div>
    </div>
  )
}
