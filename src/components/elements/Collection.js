import { SearchBar } from "./SearchBar"
import Books from "./Books"
import { useSelector } from "react-redux"
import { Button } from "@material-tailwind/react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeAllCollection } from "../../reducer/features/BookSlice";

export default function Collection() {

    const books = useSelector(state => state.BookManager.collection);
    const filter = useSelector((state) => state.BookManager.filter)
    const dispatch = useDispatch()

    const handleRemoveAllCollection = () => {
        dispatch(removeAllCollection())
    }

    return (
        <section className='container flex flex-col justify-center gap-10 mx-auto md:px-10 py-10'>
            <div className="flex flex-col gap-5 mt-10">
                <h1 className='font-bold text-blue-gray-800 text-4xl text-center'>My Collection</h1>
                <p className="text-gray-500 py-3 text-center">
                    The best free book website, find a great collection of books and learn from them.
                </p>

            </div>
            <SearchBar filter={filter} />

            {/* Grid columns */}
            <div className="flex flex-col justify-center gap-5">
                <div className="grid place-content-end">
                    <Button
                        size="lg"
                        variant="gradient"
                        color="blue-gray"
                        className="group relative flex items-center gap-3 overflow-hidden pr-[72px] sm:text-sm md:text-sm"
                        onClick={() => handleRemoveAllCollection()}
                    >
                        Remove Collections
                        <span className="absolute right-0 grid h-full w-12 place-items-center bg-blue-gray-600 transition-colors group-hover:bg-blue-gray-700">
                            <BsFillCheckCircleFill size={20} />
                        </span>
                    </Button>
                </div>
                <Books books={books} remove={true}/>
            </div>
        </section>
    )
}

