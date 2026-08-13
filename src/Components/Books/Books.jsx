import React, { useEffect, useState } from 'react'
import Book from '../Book/Book';

function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } ,[])
    console.log(books)
  return (
    <div className='container mx-auto p-2'>
        <h3 className='text-center text-3xl font-bold'>Books</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }
        </div>
    </div>
  )
}

export default Books