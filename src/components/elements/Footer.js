import { ImLinkedin, ImInstagram } from "react-icons/im";


export default function Footer() {


    return (
        <footer className="bg-blue-gray-800 ">
            <div className='flex py-5 justify-center'>
                <img src={'/images/autor.jpeg'} className=' h-20 w-20 rounded-full object-cover object-center' alt='autor' />
                <div className='flex flex-col justify-center px-4 mt-3'>
                    <p className='text-sm text-gray-200 hover:text-gray-400'>Web Developer</p>
                    <p className='text-md font-bold text-gray-200 hover:text-gray-600'>Marlon Sánchez</p>
                </div>
            </div>
            <div className="container mx-auto flex justify-center ">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <ImInstagram size={20} color="white"  />

                        <ImLinkedin size={20} color="white"/>
                    </div>
                    <p className="py-5 text-gray-400">Copyright @2023 All rights reserved | This template is made with by Marlon Sanchez </p>
                </div>
            </div>
        </footer >
    )
}