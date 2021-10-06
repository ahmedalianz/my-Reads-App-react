import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Section from '../section'
import PropTypes from 'prop-types';

export default function Search({change,allBooks}) {
  const [searched,setSearched]=useState('')
  const [searchedBooks,setSearchedBooks]=useState([])
  searchedBooks.map((book) =>{
    const existingBook=allBooks.find(b=> b.id===book.id)
    console.log(existingBook)
    if(existingBook){
      book.shelf=existingBook.shelf
    }else{
      book.shelf='none'
    }
    return book
  })

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
      }else{
        setSearchedBooks([])
      }
    }
    search_function()
  }, [searched])
  const existing=true;
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
              <Section
              key={book.id}
              book={book}
              change={change}
              allBooks={allBooks}
              existing={existing}
              />
            ))}
          </ol>
        </div>
      </div>
)
}
Search.propTypes={
  allBooks:PropTypes.array,
  existing:PropTypes.bool,
  change:PropTypes.func,
  book:PropTypes.object,
  key:PropTypes.string
}
