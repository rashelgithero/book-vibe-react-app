import React from 'react'
import { Navigate, useNavigate } from 'react-router';

function StoredListedBook({storedListedBook}) {
   const {image,tags, bookName, publisher, category, rating, bookId, yearOfPublishing, totalPages} = storedListedBook;
   const navigate = useNavigate()
   const handleViewDetails = () => {
    navigate(`/bookDetails/${bookId}`)
   }
  return (
    <div class="hero container mx-auto">
        <div class="flex flex-col md:flex-row w-full h-fit *:md:h-80 border-2 border-gray-200 rounded-2xl p-5">
            <div className='w-full md:w-1/2 max-h-80 p-10 bg-[#1313130F] rounded-xl flex justify-center items-center'>
                <img
                alt="Tailwind CSS hero component"
                src={image}
                class="w-1/2 max-h-fit md:h-full"
                />
            </div>
            <div className='w-full md:w-2/3 ml-0 md:ml-10 space-y-3'>
                <h2 className="card-title font-bold text-2xl mt-8 mb-8">{bookName}</h2>
                <div className='flex flex-wrap gap-x-3 gap-y-3 justify-between text-[#23BE0A]'>
                    {
                        tags.map(tag => (
                            <div className='bg-gray-100 p-2 rounded-xl text-sm font-normal'>
                                <h5>{tag}</h5>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-between flex-wrap'>
                    <h5 className='text-sm mb-4'>Number of pages : <span className='font-bold'>{totalPages}</span></h5>
                    <h5 className='text-sm mb-4'> Publisher : <span className='font-bold'>{publisher}</span></h5>
                    <h5 className='text-sm mb-4'>Year of Publishing : <span className='font-bold'>{yearOfPublishing}</span></h5>
                </div>
                <div className="card-actions justify-between items-center mt-5 text-base font-medium">
                    <h5>{category}</h5>
                    <div className='flex space-x-5 items-center'>
                        <h2>Rating</h2>
                        <h5>{rating}</h5>
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star" aria-label="1 star" />
                        </div>
                    </div>
                    <button onClick={handleViewDetails} class="btn bg-[#23BE0A] text-white">View Details</button>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default StoredListedBook