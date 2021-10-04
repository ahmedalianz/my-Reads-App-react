import React from 'react'

export default function Read({book_r,change}) {
    return (
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book_r.cover})` }}></div>
            <div className="book-shelf-changer">
            <select id='s' value={book_r.position} onChange={(e)=>{change(e.target.value,book_r)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            </div>
          </div>
          <div className="book-title">{book_r.title}</div>
          <div className="book-authors">{book_r.authors}</div>
        </div>
      </li>
)
}
