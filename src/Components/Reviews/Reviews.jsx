import React from 'react'
import { useLoaderData } from 'react-router'
import BookReview from '../BookReview/BookReview';

function Reviews() {
    const books = useLoaderData();
  return (
    <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-10 container mx-auto p-2 mt-10'>
        {
            books.map(book => <BookReview book= {book}></BookReview>)
        }
    </div>
  )
}

export default Reviews