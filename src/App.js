import React from 'react'
import './App.css'
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './components/searchpage/search'
import MainPage from './components/mainpage/mainpage'
import PropTypes from 'prop-types';
class BooksApp extends React.Component {
  state = {
    allBooks: []
  }
async componentDidMount(){
  try
    {
    let res=await BooksAPI.getAll()
    this.setState({allBooks:res})
    }
  catch(err)
  {
    console.error(err)
  }
}

  handleChange = (selection,book,existing) => {
    if(!existing){
      let index=this.state.allBooks.indexOf(book)
      let moved_book=this.state.allBooks[index]
      moved_book.shelf=selection
      this.setState({book:moved_book})
      BooksAPI.update(moved_book, selection)
    }else{
      const moved_book={
        id:book.id,
        shelf:selection,
        title:book.title,
        author:book.author,
        imageLinks:book.imageLinks
      }
      let allbooks=[...this.state.allBooks]
      allbooks.push(moved_book)
      this.setState({allbooks})
      BooksAPI.update(moved_book, selection)
    }
}
  render() {
    const{allBooks}=this.state
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" exact >
                <MainPage
                allBooks={allBooks}
                change={this.handleChange}
                />
            </Route>
              <Route path="/search">
                <Search
                allBooks={allBooks}
                change={this.handleChange}
                />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
BooksApp.propTypes={
  allBooks:PropTypes.array,
  change:PropTypes.func
}
export default BooksApp
