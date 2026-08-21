import React from 'react'

function BookReview({book}) {
    const {review, bookName, author} = book
  return (
    <div className='border-2 p-2 border-gray-200 rounded-lg'>
        <h1 className='font-bold text-2xl text-center'>{bookName}</h1>
        <h5 className='text-center mb-3'>{author}</h5>
        <p className='text-justify font-extralight'>{review}</p>
    </div>
  )
}

export default BookReview