import React,{useState,useEffect} from 'react'
import './App.css'
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './components/searchpage/search'
import MainPage from './components/mainpage/mainpage'
import PropTypes from 'prop-types';
const BooksApp=() => {
  const[allBooks,setAllBooks]=useState([])

useEffect(() => {
  async function getBooks(){
    try
    {
      let res=await BooksAPI.getAll()
      setAllBooks(res)
    }
      catch(err)
    {
      console.error(err)
    }
  }
  getBooks()
},[])


  const handleChange = (selection,book) => {

    let books=allBooks.filter(b=>b.id!==book.id)
    book.shelf=selection
    setAllBooks([...books,book])
    BooksAPI.update(book, selection)
}
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" exact >
                <MainPage
                allBooks={allBooks}
                change={handleChange}
                />
            </Route>
            <Route path="/search">
                <Search
                allBooks={allBooks}
                change={handleChange}
                />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

BooksApp.propTypes={
  allBooks:PropTypes.array,
  change:PropTypes.func
}
export default BooksApp
