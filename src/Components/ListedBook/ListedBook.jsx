import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { getToLocalStorage } from '../../utilities/localStorage';
import StoredListedBook from '../StoredListedBook/StoredListedBook';
import { FaSortDown } from "react-icons/fa";
import getSortedBooks from '../../utilities/getSortedBooks';

function ListedBook() {
  const books = useLoaderData();
  const [activeTab, setActiveTab] = useState('read')
  const [listedBooks, setListedBooks] = useState([])
  const [sort, setSort] = useState('');
  console.log(books.bookId)
  useEffect(() =>{
    const storedBooks = getToLocalStorage(activeTab)
    const filteredBooks = books.filter(book => storedBooks.includes(book.bookId))
    setListedBooks(filteredBooks)
  },[activeTab])
  const handleBookButton = (handleBookState) => {
    setActiveTab(handleBookState);
  }
  const sortedBooks = getSortedBooks(listedBooks, sort);
  const handleSorted = (sorting)=>{
    setSort(sorting)
    console.log(sortedBooks)
  }
  console.log(sortedBooks)
  return (
    <div className='p-2'>
      <div className='p-2 flex justify-center'>
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1 flex items-center justify-center bg-green-500 text-white">
            <h1>{sort ? sort : 'Sort By'}</h1>  
            <FaSortDown />
          </div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm justify-center items-center">
            <li className='w-full'><a onClick={() => handleSorted('Rating')} className='w-full flex items-center justify-center'> Rating</a></li>
            <li className='w-full'><a onClick={() => handleSorted('NumberOfPages')} className='w-full flex items-center justify-center'>Number Of Pages</a></li>
            <li className='w-full'><a onClick={() => handleSorted('PublishedYear')} className='w-full flex items-center justify-center'>Published Year</a></li>
          </ul>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='flex min-w-60'>
            <button onClick={() => handleBookButton('read')} className={`btn bg-transparent rounded-none border-2 border-b-0 -mb-.5 shadow-none ${
            activeTab === 'read'
              ? 'border-green-500 text-green-600 font-bold rounded-t-lg'
              : 'border-transparent text-gray-500 hover:text-gray-700 border-b-2 border-b-green-500'
            }`}>Read Books</button>
            <button onClick={() => handleBookButton('wishlist')} className={`btn bg-transparent rounded-none border-2 border-b-0 -mb-.5 shadow-none z-10 block ${
              activeTab === 'wishlist'
                ? 'border-green-500 text-green-600 font-bold rounded-t-lg'
                : 'border-transparent text-gray-500 hover:text-gray-700 border-b-2 border-b-green-500'
            }`}>Wishlist Books</button>
        </div>
        <div className={`flex w-full border-b-2 border-green-500 -z-10 ${activeTab === 'wishlist'? '': ''}`}></div>
      </div>
      <div className='flex flex-col my-10 gap-10 p-10 '>
          {
            sortedBooks.map(storedListedBook => <StoredListedBook storedListedBook={storedListedBook}></StoredListedBook>)
          }
      </div>
    </div>
  )
}

export default ListedBook