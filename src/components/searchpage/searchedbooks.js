import React,{useState,useEffect} from 'react'

export default function SearchedBooksItem({book,add,allBooks}) {
  const[shelf,setShelf]=useState('none')
  const existingBook=allBooks.filter(b=> b.title===book.title)
  useEffect(() =>{
    if(existingBook.length>0){
        setShelf(existingBook[0].shelf)
    }else{
      setShelf('none')
    }
  },[existingBook])
    return (
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
            <select value={shelf} onChange={(e)=>{add(e.target.value,book)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
}
