import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchedBooksItem from './searchedbooks'
import Removedbooks from './removedbooks'

export default function Search({change,allBooks}) {
  const [searched,setSearched]=useState('')
  const [searchedBooks,setSearchedBooks]=useState([])
  useEffect(() => {
    async function search_function(){
      await BooksAPI.search(searched).then(res=>setSearchedBooks(res))
    }
      search_function()
    
  }, [searched,searchedBooks])
  console.log(searchedBooks)
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
          <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input value={searched} onChange={e=>{setSearched(e.target.value)}} type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks && searchedBooks.map(book =>(
              <SearchedBooksItem
              key={book.id}
              book_s={book}
              change={change}
              />
            ))}
            {allBooks.filter(book=>book.position==='none')
            .map(book=> (
              <Removedbooks
              key={book.id}
              book_s={book}
              change={change}
              />
            ))}
          </ol>
        </div>
      </div>
)
}
