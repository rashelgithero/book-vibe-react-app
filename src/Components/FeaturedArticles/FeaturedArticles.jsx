import React, { useEffect, useState } from 'react'
import { getToLocalStorage } from '../../utilities/localStorage'
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router';
import Book from '../Book/Book';

function FeaturedArticles() {
    const [readBooksCount, setReadBooksCount] = useState(0);
    const [filterBooks, setFilterBooks] = useState([]);
    const books = useLoaderData();
    const navigate = useNavigate();
    useEffect(() => {
        const readBooks = getToLocalStorage('read');
        const readIds =readBooks.map(String);
        const filteredBooks = books.filter(book => !readIds.includes(String(book.bookId)))
        setFilterBooks(filteredBooks)
        setReadBooksCount(readBooks.length)
    },[])
    const goalBooks = 20;
    const percentage = Math.min(
        Math.round((readBooksCount/goalBooks)* 100),
        100
    )
    
    const handleBookDetails = (id) =>{
        navigate(`/bookDetails/${id}`);
    }
  return (
   <div>
        <div className="bg-base-200 p-6 rounded-2xl max-w-xl mx-auto my-8 text-center shadow-md">
            <h3 className="text-xl font-bold mb-2">🎯 2026 Reading Challenge</h3>
            <p className="text-gray-600 mb-4">You have read {readBooksCount} out of {goalBooks} books this year!</p>
            
            {/* DaisyUI Progress Bar */}
            <progress className="progress progress-success w-full" value={percentage} max="100"></progress>
            <span className="text-sm text-gray-500 mt-2 block">You Almost completed {percentage}%</span>
                
        </div>
        <div className='mb-10'>
            <h2 className='font-black text-3xl my-20 text-center'>More Suggested Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer'>
                {
                    filterBooks.map(book => <Book book={book} handleBookDetails={handleBookDetails} ></Book>)
                }
            </div>
        </div>
    </div>
  )
}

export default FeaturedArticles