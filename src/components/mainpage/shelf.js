import React from 'react'
import Section from '../section'

export default function Shelf({shelf,change}) {
    return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {shelf.map(book => (
                <Section
                  key={book.id}
                  book={book}
                  change={change}
                />
                ))}
              </ol>
            </div>
          </div>
)
}
