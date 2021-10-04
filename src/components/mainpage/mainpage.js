import React from 'react'
import Current from './currentlyreading/current'
import WantRead from './wantread/wantread'
import Read from './read/read'
import {Link} from 'react-router-dom'

export default function MainPage({allBooks,change}) {
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {allBooks.filter(book=>book.position==='currentlyReading')
                    .map(book_CR => (
                      <Current
                      key={book_CR.id}
                      book_CR={book_CR}
                      change={change}
                      />
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {allBooks.filter(book=>book.position==='wantToRead')
                    .map(book_WR => (
                      <WantRead
                      key={book_WR.id}
                      book_WR={book_WR}
                      change={change}
                      />
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {allBooks.filter(book=>book.position==='read')
                    .map(book_r => (
                      <Read
                      key={book_r.id}
                      book_r={book_r}
                      change={change}
                      />
                    ))}
                </ol>
              </div>
            </div>
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
