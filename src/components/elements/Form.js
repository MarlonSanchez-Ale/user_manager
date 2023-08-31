import {
    Card,
    Input,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  editBook } from "../../reducer/features/BookSlice";
import Select from "react-tailwindcss-select";

export default function Form() {

    const [book, setBook] = useState({
        title: "",
        author: "",
        description: "",
        category: "",
        date_publication: ""
    })

    const options = [
        { value: "Adventure stories", label: "Adventure stories" },
        { value: "Classics", label: "Classics" },
        { value: "Crime", label: "Crime" },
        { value: "Fairy tales, fables, and folk tales", label: "Fairy tales, fables, and folk tales" },
        { value: "Fantasy", label: "Fantasy" },
        { value: "Historical fiction", label: "Historical fiction" },
        { value: "Horror", label: "Horror" },
        { value: "Humour and satire", label: "Humour and satire" },
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const books = useSelector(state => state.BookManager.items)

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (params.id) {
            dispatch(editBook(book))
            navigate('/')
        } else {
            /* dispatch(addBook({
                 ...book,
                 id: v4(),
             }))
             navigate('/')*/
            console.log(book)
        }
    }

    useEffect(() => {
        if (params.id) {
            setBook(books.find((book) => book.id === params.id))
        }
    }, [params.id, books])

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setBook({
            ...book,
            date_publication: newValue
        });
    }

    return (
        <section className="sm:py-2 md:py-10" >
            <div className=" grid place-items-center mx-auto md:px-5 my-5">
                <Card color="transparent" shadow={false}>
                    {params.id && (
                        <Typography variant="h5" className="mt-5 text-gray-100">
                            Edit Book
                        </Typography>
                    )}
                    {!params.id && (
                        <Typography variant="h4" color="blue-gray">
                            Register Book
                        </Typography>
                    )}
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter book details to register.
                    </Typography>
                    <form className="mt-8 mb-2 max-w-screen-lg sm:w-96 md:w-full" onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center gap-5 w-full">
                            <div className="flex flex-grow justify-center gap-4">
                                <Input
                                    size="lg"
                                    label="Title"
                                    name="title"
                                    value={book.title}
                                    onChange={(e) => {
                                        setBook({
                                            ...book,
                                            title: e.target.value
                                        })
                                    }}

                                />
                                <Input
                                    size="lg"
                                    label="Author"
                                    name="author"
                                    value={book.author}
                                    onChange={(e) => {
                                        setBook({
                                            ...book,
                                            author: e.target.value
                                        })
                                    }}
                                />
                            </div>
                            <div className="flex flex-grow justify-center gap-4">
                                <Select
                                    value={book.category}
                                    onChange={(value) =>
                                        setBook({
                                            ...book,
                                            category: value,
                                        })
                                    }
                                    options={options}
                                />
                                <Datepicker
                                    useRange={false}
                                    asSingle={true}
                                    value={book.date_publication}
                                    onChange={(newValue) => {
                                        setBook({
                                            ...book,
                                            date_publication: newValue
                                        })
                                    }}
                                    placeholder="Publication"
                                    toggleClassName="absolute bg-blue-300 rounded-r-lg text-white right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                                />
                            </div>

                            <Textarea
                                placeholder="Description"
                                type="text"
                                value={book.description}
                                onChange={(e) => {
                                    setBook({
                                        ...book,
                                        description: e.target.value
                                    })
                                }}
                            />
                        </div>

                        <Button className="mt-6" type="submit" fullWidth>
                            Register
                        </Button>

                    </form>
                </Card>
            </div>

        </section>
    )
}