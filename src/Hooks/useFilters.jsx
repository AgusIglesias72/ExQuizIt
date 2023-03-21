import { useState, useEfect } from 'react'

export default function useFilters() {
  const [activeCategory, setActiveCategory] = useState('popular')
  const [activeNumber, setActiveNumber] = useState(2)

  return {
    activeCategory,
    activeNumber,
    setActiveCategory,
  }
}
