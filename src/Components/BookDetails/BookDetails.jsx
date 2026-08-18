import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';
import { getToLocalStorage, setToLocalStorage } from '../../utilities/localStorage';

function BookDetails() {
    const {id} = useParams();
    const books = useLoaderData()
    const book = books.find(book => Number(book.bookId)=== Number(id));
    const {bookName, image, category, publisher, rating, author, review, tags, yearOfPublishing, totalPages, bookId} = book;
    const [activeTab, setActiveTab] = useState('');
    // const [storedBooks, setStoredBooks] = useState('');
    const [bookList, setBookList] = useState([]);
    const [read, setRead] = useState([])
    // useEffect(() => {
    //     const storageBooks = getToLocalStorage(activeTab);
    //     if(books.length > 0){
    //         const targetKey = type
    //         // let booksStore = [];
    //         // for( const id of storageBooks){
    //         //     booksStore.push(id)
    //         // }
    //         // setBookList(booksStore);
    //     }
    // },[activeTab])
    
    const handleBookButton = (spacifyButton) =>{
        setActiveTab(spacifyButton)
        const currentReadList = getToLocalStorage('read');
        const findReadBook = currentReadList.find(id => id === bookId);

        const currentWishList = getToLocalStorage('wishlist');
        const findWishBook = currentWishList.find(id => id === bookId)
       
        if(spacifyButton === 'wishlist'){
            if(!findReadBook){
                if(!findWishBook){
                setToLocalStorage(spacifyButton, bookId)
                toast(`You Have Successfully Added Wishlist`)
                }
                else{
                    toast.error(`You already Added Wishlist`);
                }
            }
            else{
                toast.error(`You already Read the Book`);
            }
        }
        else if(spacifyButton === 'read'){
            if(!findReadBook){
                setRead(currentReadList)
                setToLocalStorage(spacifyButton, bookId)
                toast(`You Have Successfully Added Read`)
            }
            else{
                toast.error(`You already Added Read`)
            }
        }
   }
    
  return (
    <div className="card card-side gap-5 md:gap-5 lg:gap-20 mt-10 container mx-auto p-2 w-full flex flex-col md:flex-row">
        <figure className='min-h-screen p-20 md:p-10 lg:p-16 w-full md:w-1/2 bg-base-200 rounded-2xl'>
            <img
            src={image}
            alt="Movie" 
            className=' h-fit md:h-2/3 lg:w-full lg:h-full'/>
        </figure>
        <div className="card-body container mx-auto w-full md:w-1/2">
            <h2 className="card-title font-bold text-4xl mb-4">{bookName}</h2>
            <h5 className='font-medium text-xl'>by : {author}</h5>
            <h5 className='text-xl font-medium mt-5 border-t-2 border-gray-300 pt-5'>{category}</h5>
            <p className='text-justify w-full text-lg h-fit my-5'><span className='font-bold '>Review: </span>{review}</p>
            <div className='flex justify-between items-center max-w-full flex-wrap gap-y-3'>
                <span className='font-bold'>Tag</span>
                {   
                    tags.map(tag => (
                        <div className='bg-gray-100 p-2 rounded-xl text-lg font-normal'>
                            <h5>{tag}</h5>
                        </div>
                    ))
                }
            </div>
            <div className='mt-6 pt-6 border-t-2 border-gray-300'>
                <h5 className='text-lg mb-4'>Number of pages : <span className='font-semibold'>{totalPages}</span></h5>
                <h5 className='text-lg mb-4'> Publisher : <span className='font-semibold'>{publisher}</span></h5>
                <h5 className='text-lg mb-4'>Year of Publishing : <span className='font-semibold'>{yearOfPublishing}</span></h5>
                <h5 className='text-lg'>Rating: <span className='font-semibold'>{rating}</span></h5>
            </div>
            <div className='flex gap-10 mt-8'>
                <button
                    onClick={() => handleBookButton('read')}
                    className={`btn font-semibold text-lg w-28 ${activeTab === 'read' ? ' bg-[#50B1C9] text-white' : 'btn-outline'}`}
                    >
                    Read
                </button>
                <button
                    onClick={() => handleBookButton('wishlist')}
                    className={`btn font-semibold text-lg ${activeTab === 'wishlist' ? 'btn bg-[#50B1C9] text-white' : 'btn btn-outline'}`}
                >
                    Wishlist
                </button>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default BookDetails