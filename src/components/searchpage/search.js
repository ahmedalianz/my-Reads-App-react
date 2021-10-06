import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import SearchedBooksItem from './searchedbooks'
import * as BooksAPI from '../../BooksAPI'
export default function Search({change,allBooks,add}) {
  const [searched,setSearched]=useState('')
  const [searchedBooks,setSearchedBooks]=useState([])
  useEffect(() => {
    async function search_function(){
      if(searched!==''){
        try{
            await BooksAPI.search(searched).then(res=>{
            if(res.error){
                setSearchedBooks([])
            }else{
                setSearchedBooks(res)
            }})
        }
        catch(err){
              console.error('error',err)
        }  
      }
    }
    search_function()
  }, [searched])
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
            {searchedBooks && searchedBooks.filter(book => book.imageLinks!==undefined).map(book =>(
              <SearchedBooksItem
              key={book.id}
              book={book}
              change={change}
              add={add}
              allBooks={allBooks}
              />
            ))}
          </ol>
        </div>
      </div>
)
}
