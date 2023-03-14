import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../ui/Card/Card'
import { getArticlsAction } from '../../redux/Actions/ArticleActions'
import Filter from '../../ui/Filter/Filter_sirch'
import './style.css'

export default function Home() {
  const dispatch = useDispatch()

  const allArticls = useSelector((store) => store?.articls)
  const [filtredArticles, setFilteredArticles] = useState(allArticls || [])
  const isLoading = useSelector((store) => store?.loading)

  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)

  const displayItems = (items, page, perPage) => {
    const startIndex = (page - 1) * perPage
    const endIndex = startIndex + perPage
    return items.slice(startIndex, endIndex).map((art) => <Card key={art?.id} oneCard={art} isLoading={isLoading} />)
  }

  function displayPageLinks(items, itemsPerPage) {
    const totalPages = Math.ceil(items.length / itemsPerPage)
    const pageLinks = []

    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <button key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </button>,
      )
    }
    return pageLinks
  }

  useEffect(() => {
    setFilteredArticles(allArticls)
  }, [allArticls])

  useEffect(() => {
    dispatch(getArticlsAction())
    // eslint-disable-next-line
  }, [])

  const displayedItems = displayItems(filtredArticles, currentPage, itemsPerPage)
  const displayedPageLinks = displayPageLinks(filtredArticles, itemsPerPage)

  return (
    <>
      <div>
        <Filter allArticls={allArticls} setFilteredArticles={setFilteredArticles} />
      </div>
      {isLoading ? <div>ЗАГРУЗКА!!!!</div> : <div>{displayedItems}</div>}
      <div className="paginationBox">{displayedPageLinks}</div>
    </>
  )
}
