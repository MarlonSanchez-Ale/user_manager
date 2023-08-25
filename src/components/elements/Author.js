import React from 'react'

export default function Author() {
    return (
        <div className='author flex py-5'>
            <img src={"/images/autor.jpeg"} width={60} height={60} className='rounded-full' alt='autor' />
            <div className='flex flex-col justify-center px-4'>
                <p className='text-md font-bold text-gray-800 hover:text-gray-600'>Marlon Sanchez</p>
                <p className='text-sm text-gray-600 hover:text-gray-400'>Desarrollador Web</p>
            </div>
        </div>
    )
}
