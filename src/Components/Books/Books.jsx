import React, { useEffect, useState } from 'react'
import Book from '../Book/Book';
import { Link, Navigate, useNavigate } from 'react-router';

function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } ,[])
    const navigate = useNavigate()
    const handleBookDetails = (id) =>{
        navigate(`/bookDetails/${id}`)
    }
  return (
    <div className='container mx-auto p-2'>
        <h3 className='text-center text-3xl font-bold mb-10'>Books</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer' >
            {
                books.map(book => <Book book={book} key={book.bookId} handleBookDetails={handleBookDetails}></Book>)
            }
        </div>
    </div>
  )
}

export default Books