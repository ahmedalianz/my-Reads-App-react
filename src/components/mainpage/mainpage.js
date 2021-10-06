import React from 'react'
import Section from './section'
import {Link} from 'react-router-dom'

export default function MainPage({allBooks,change}) {
  const filterer=books=>shelf=>books.filter(book =>book.shelf===shelf),
        filterBy=filterer(allBooks),
        booksInShelf1=filterBy('currentlyReading'),
        booksInShelf2=filterBy('wantToRead'),
        booksInShelf3=filterBy('read');
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
                    {booksInShelf1.map(book => (
                      <Section
                      key={book.id}
                      book={book}
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
                {booksInShelf2.map(book => (
                      <Section
                      key={book.id}
                      book={book}
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
                {booksInShelf3.map(book => (
                      <Section
                      key={book.id}
                      book={book}
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
