import Format from "./layout/format";
import Author from "./elements/Author";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  BsFillCheckCircleFill } from "react-icons/bs";
import { addCollection } from "../reducer/features/BookSlice";
import {  Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function BookDetails() {

    const params = useParams();
    const [book, setBook] = useState([]);
    const [collection, setCollection] = useState([]);
    const books = useSelector(state => state.BookManager.items);
    const collections = useSelector(state => state.BookManager.collection)
    const navigate = useNavigate()
    const dispatch = useDispatch();


    useEffect(() => {
        if (params.id) {
            setBook(books.find((x) => x.id === params.id))
        }
    }, [params.id, books])

    useEffect(() => {
        if (params.id) {
            setCollection(collections.find((x) => x.id === params.id))
        }
    }, [params.id, collections])


    const handleAddCollection = () => {
        if (params.id) {
            dispatch(addCollection(params.id))
            setCollection(collections.find((x) => x.id === params.id))
        }
    }


    return (
        <Format>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='post py-10'>
                    <h1 className='font-bold text-2xl text-center pb-5'>
                        {book?.title}
                    </h1>
                    <p className=' font-light text-deep-orange-600 text-xl text-center pb-5'>
                        {book?.Category}
                    </p>
                    <p className='text-gray-500 text-1xl text-start'>
                        {book?.description}
                    </p>
                    <div className='py-10 relative flex w-full'>
                        <img src={book?.image} alt='' width={900} height={800} />
                    </div>
                    <p className='text-gray-500 text-1xl text-start'>
                        {book?.review}
                    </p>
                </div>
                <div className='grid place-content-center gap-10'>
                    <Author name={book.author} imageAuthor={book.imageAuthor} />

                    {collection && (
                        <div className="grid place-content-around">
                            <Button
                                size="lg"
                                variant="gradient"
                                color="blue-gray"
                                className="group relative flex items-center gap-3 overflow-hidden pr-[72px] sm:text-sm md:text-sm"
                                onClick={() => navigate("/collection")}
                            >
                                Go to collection
                                <span className="absolute right-0 grid h-full w-12 place-items-center bg-blue-gray-600 transition-colors group-hover:bg-blue-gray-700">
                                    <BsFillCheckCircleFill size={20} />
                                </span>
                            </Button>
                        </div>
                    )}
                    {!collection && (
                        <div className="grid place-content-around">
                            <Button
                                size="lg"
                                variant="gradient"
                                color="blue-gray"
                                className="group relative flex items-center gap-3 overflow-hidden pr-[72px] sm:text-sm md:text-lg"
                                onClick={() => handleAddCollection()}
                            >
                                Save Book
                                <span className="absolute right-0 grid h-full w-12 place-items-center bg-blue-gray-600 transition-colors group-hover:bg-blue-gray-700">
                                    <BsFillCheckCircleFill size={20} />
                                </span>
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </Format>
    )
}