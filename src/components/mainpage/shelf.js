import React from 'react'
import Section from '../section'

export default function Shelf({shelf,change}) {
    return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf[0] && shelf[0].shelf}</h2>
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
