import React from "react";
import Author from "./Author";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "@material-tailwind/react";

export default function LastestPosts(params) {
    const books = useSelector(state => state.BookManager);
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

    console.log(books)

    return (
        <section className='container mx-auto md:px-20 py-10'>
            <div className="flex flex-col gap-5 my-20">
                <h1 className='font-bold text-blue-gray-800 text-4xl text-center'>Latest Books</h1>
                <p className="text-gray-500 py-3 text-center">
                    The best free book website, find a great collection of books and learn from them.
                </p>
                <form className="flex flex-row justify-center items-cente">
                    <div className="relative flex w-full max-w-[26rem]">
                        <Input
                            type="text"
                            label="Book finder"
                            value={email}
                            onChange={onChange}
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                        <Button
                            size="sm"
                            color={email ? "gray" : "blue-gray"}
                            disabled={!email}
                            className="!absolute right-1 top-1 rounded"
                        >
                            Search
                        </Button>
                    </div>
                </form>
            </div>


            {/* Grid columns */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className='item'>
            <div className='images'>
                <img src={"/images/imagen1.jpg"} alt='image 1' className='rounded-none' width={500} height={350} />
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className="cat">
                    <p className="text-orange-600 hover:text-orange-400">Business, Travel.</p>
                    <p className="text-gray-800 hover:text-gray-400">July 3, 2022.</p>
                </div>
                <div className="tittle">
                    <p className=" font-bold text-xl  text-gray-800 hover:text-gray-400">Lorem ipsum dolor sit amet.</p>
                </div>
                <p className="text-gray-500 py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.
                </p>
                <Author />
            </div>
        </div>
    )
}