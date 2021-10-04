import React from 'react'

export default function WantRead({book_WR,change}) {
    return (
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book_WR.cover})` }}></div>
            <div className="book-shelf-changer">
            <select value={book_WR.position} onChange={(e)=>{change(e.target.value,book_WR)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            </div>
          </div>
          <div className="book-title">{book_WR.title}</div>
          <div className="book-authors">{book_WR.authors}</div>
        </div>
      </li>
)
}
