import React from 'react'

export default function SearchedBooksItem({book_s,change}) {
      book_s.position = 'none'
    return (
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book_s.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
            <select value={book_s.position} onChange={(e)=>{change(e.target.value,book_s)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            </div>
          </div>
          <div className="book-title">{book_s.title}</div>
          <div className="book-authors">{book_s.authors}</div>
        </div>
      </li>
    )
}
