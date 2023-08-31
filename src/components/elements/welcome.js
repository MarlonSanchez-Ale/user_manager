import { Player } from '@lottiefiles/react-lottie-player';
import {
    Button,
} from "@material-tailwind/react";
import React from 'react';
import { AiOutlineGoogle } from "react-icons/ai";
import { useAuth0 } from '@auth0/auth0-react';
import { BsFillBookmarksFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


export default function Welcome() {

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();



    return (
        <section className="sm:py-2 md:py-16" >
            <div className="container mx-auto md:px-20 my-20">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="image">
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/963a3859-ca70-40cb-8c30-8f2a7661d68a/C9AmjSQuhL.json"
                            style={{ height: '250px', width: '350px', background: 'white' }}
                        />
                    </div>
                    <div className="info flex justify-center flex-col">
                        <div className="cat">
                            <p className="text-orange-600 text-lg font-light hover:text-orange-500">Welcome to the book site</p>
                        </div>
                        <div className="tittle">
                            <p className="font-bold text-3xl md:text-7xl text-blue-gray-800">Free Books</p>
                        </div>
                        <p className="text-gray-500 font-normal py-3">
                            The best free book website, find a great collection of books and learn from them.  Don't miss this experience.
                        </p>
                        {!isAuthenticated && (
                            <Button
                                size="lg"
                                color="blue-gray"
                                className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                                onClick={() => loginWithRedirect()}
                            >
                                Sign in with Google
                                <span className="absolute right-0 grid h-full w-12 place-items-center bg-blue-gray-800 transition-colors group-hover:bg-blue-gray-700">
                                    <AiOutlineGoogle size={25} />
                                </span>
                            </Button>
                        )}
                        {isAuthenticated && (
                                <Button
                                    size="lg"
                                    color="blue-gray"
                                    className="group relative flex items-center gap-3 overflow-hidden sm:text-sm mr-10 md:text-sm"
                                    onClick={() => { navigate("/collection") }}
                                >
                                    My Collection
                                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-blue-gray-800 transition-colors group-hover:bg-blue-gray-700">
                                        <BsFillBookmarksFill size={25} />
                                    </span>
                                </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
