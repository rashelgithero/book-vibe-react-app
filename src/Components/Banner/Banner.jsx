import React from 'react'
import { Link } from 'react-router'


function Banner() {
    const handleViewList = () =>{

    }
  return (
    <div className=" hero bg-[#1313130D] min-h-screen container mx-auto rounded-xl px-4 sm:px-8 lg:px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
            alt="Tailwind CSS hero component"
            src="https://i.ibb.co.com/bggmDtbs/pngwing-1.png"
            />
            <div className='space-x-20'>
                <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <button onClick={handleViewList} className="btn py-6 font-bold text-xl bg-[#23BE0A] text-white mt-12">
                    <Link to='/listedBook'>View The List</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner