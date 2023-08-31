import React from 'react'

export default function Author({ name, imageAuthor }) {
    return (
        <div className='author flex py-5'>
            <img src={imageAuthor} className=' h-20 w-20 rounded-full object-cover object-center' alt='autor' />
            <div className='flex flex-col justify-center px-4'>
                <p className='text-sm text-gray-600 hover:text-gray-400'>Writer</p>
                <p className='text-md font-bold text-gray-800 hover:text-gray-600'>{name}</p>
            </div>
        </div>
    )
}
