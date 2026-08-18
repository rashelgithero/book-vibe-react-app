import React from 'react'

function Book({book, handleBookDetails}) {
    const {image,tags, bookName, publisher, category, rating, bookId}= book;
  return (
    <div onClick={() => handleBookDetails(bookId)} className="card bg-base-100 shadow-sm">
        <figure className='bg-[#F3F3F3] p-5 w-full h-90'>
            <img className='max-w-75 max-h-80'
            src={image}
            alt="" />
        </figure>
        <div className="card-body">
            <div className='flex flex-wrap gap-x-3 gap-y-3 justify-between text-[#23BE0A]'>
                {
                    tags.map(tag => (
                        <div className='bg-gray-100 p-2 rounded-xl text-sm font-normal'>
                            <h5>{tag}</h5>
                        </div>
                    ))
                }
            </div>
            <h2 className="card-title font-bold text-2xl mt-8">{bookName}</h2>
            <h5 className='font-medium text-base'>by : {publisher}</h5>
            <div className="card-actions justify-between mt-5 text-base font-medium">
                <h5>{category}</h5>
                <div className='flex space-x-5 items-center'>
                    <h5>{rating}</h5>
                    <div class="rating">
                        <input type="radio" name="rating-1" class="mask mask-star" aria-label="1 star" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book