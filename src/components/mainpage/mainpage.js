import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './shelf';
import PropTypes from 'prop-types';

export default function MainPage({allBooks,change}) {
  const filterer=books=>shelf=>books.filter(book =>book.shelf===shelf),
        filterBy=filterer(allBooks),
        booksInShelf1=filterBy('currentlyReading'),
        booksInShelf2=filterBy('wantToRead'),
        booksInShelf3=filterBy('read'),
        booksInShelves=[booksInShelf1,booksInShelf2,booksInShelf3];
    return (
          <div className="list-books">

            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
              {booksInShelves.map(shelf => (
              <Shelf
                shelf={shelf}
                key={booksInShelves.indexOf(shelf)}
                change={change}
              />
              ))}
              </div>
            </div>

            <div className="open-search">
              <Link to="/search">
              <button>Add a book</button>
              </Link>
            </div>
            
          </div>
)
}
MainPage.propTypes={
  allBooks:PropTypes.array,
  change:PropTypes.func,
  key:PropTypes.string,
  shelf:PropTypes.array,
}
