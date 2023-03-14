import React, { useEffect, useState } from 'react'
import './style.css'

export default function Filter({ setFilteredArticles, allArticls }) {
  const [input, setInput] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  useEffect(() => {
    const filtered = allArticls.filter((article) => {
      const date = new Date(article.date)
      const startDateFilter = startDate ? new Date(startDate) <= date : true
      const endDateFilter = endDate ? new Date(endDate) >= date : true
      const searchFilter = article.title.toLowerCase().includes(input.toLowerCase())

      return startDateFilter && endDateFilter && searchFilter
    })

    setFilteredArticles(filtered)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, allArticls, startDate, endDate])


  const handleFilterChange = (e) => {
    setInput(e.target.value)
  }
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }

  return (
    <div className="searchFilter">
      <div className="search">
        <div>
          <p>Поиск по статьям</p>
        </div>
        <input type="text" value={input} onChange={handleFilterChange} placeholder="Search" />
      </div>
      <div className="filter">
        <div>
          <p>Фильтр по дате: </p>
        </div>
        <span>
          c <input type="date" onChange={handleStartDateChange} defaultValue="2020-06-01" min="2020-06-01" />
        </span>
        <span>
          {' '}
          по <input type="date" onChange={handleEndDateChange} defaultValue="2020-06-01" min="2020-06-01" />
        </span>
      </div>
    </div>
  )
}
