import { SearchBar } from "./SearchBar"
import Books from "./Books"
import { useSelector } from "react-redux"

export default function LastestPosts() {

    const books = useSelector(state => state.BookManager.items);
    const filter = useSelector((state) => state.BookManager.filter)

    return (
        <section className='container flex flex-col justify-center gap-10 mx-auto md:px-20 py-10'>
            <div className="flex flex-col gap-5 mt-20">
                <h1 className='font-bold text-blue-gray-800 text-4xl text-center'>Latest Books</h1>
                <p className="text-gray-500 py-3 text-center">
                    The best free book website, find a great collection of books and learn from them.
                </p>

            </div>
            <SearchBar filter={filter} />

            {/* Grid columns */}
            <Books books={books} remove={false} />
        </section>
    )
}

