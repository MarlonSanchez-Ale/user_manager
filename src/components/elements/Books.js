import Author from "./Author";
import { useSelector, useDispatch } from "react-redux";
import { Alert, IconButton } from "@material-tailwind/react";
import { BsSignStopFill } from "react-icons/bs";
import { Player } from '@lottiefiles/react-lottie-player';
import { BsArrowUpRightSquareFill, BsFillBookmarkXFill } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { removeCollection } from "../../reducer/features/BookSlice";

export default function Books({ books, remove }) {

    const filterbyTittle = useSelector((state) => state.BookManager.filter)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeCollection(id))
    }

    return (
        <>
            <div className='grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-14' >
                {books && books?.filter((books) => filterbyTittle ? books?.title.includes(filterbyTittle) : true)
                    .map(({ id, title, image, author, imageAuthor, description, date_publication, Category }, index) => (
                        <div className='item' key={index}>
                            <div className='images relative flex w-full'>
                                <img src={image} alt="" className='rounded-none' width={500} height={350} />
                                <div className="flex !absolute right-2 top-2 rounded gap-3">
                                    <IconButton className=" bg-blue-gray-500" onClick={() => navigate(`/details/${id}`)}>
                                        <BsArrowUpRightSquareFill size={20} color="blue-gray" />
                                    </IconButton>
                                    {remove && (
                                        <IconButton className=" bg-blue-gray-800" onClick={() => handleRemove(id)}>
                                            <BsFillBookmarkXFill size={20} color="blue-gray" />
                                        </IconButton>
                                    )}
                                </div>

                            </div>
                            <div className='info flex justify-center flex-col py-4'>
                                <div className="cat">
                                    <p className="text-orange-600 hover:text-orange-400">{Category}</p>
                                    <p className="text-gray-800 hover:text-gray-400">{date_publication}</p>
                                </div>
                                <div className="tittle">
                                    <p className=" font-bold text-xl  text-gray-800 hover:text-gray-400">{title}</p>
                                </div>
                                <p className="text-gray-500 py-3">
                                    {description}
                                </p>
                                <Author name={author} imageAuthor={imageAuthor} />
                            </div>
                        </div>
                    ))}

            </div>

            {!books &&
                <div className="w-full">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/d467bfc1-b951-4cc2-b2dc-9e932a9d2a30/NLYY3C16cU.json"
                        style={{ height: '300px', width: '300px' }}
                    />
                </div>
            }
            {books && !books.length && (
                <Alert
                    icon={<BsSignStopFill className="mt-px h-6 w-6" />}
                    className="bg-gray-200 text-gray-500 border-l-4 border-[#4775e0] rounded-none font-medium shadow-gray-800 text-lg w-full">
                    You don't have any collection book
                </Alert>
            )}
        </>

    )
}