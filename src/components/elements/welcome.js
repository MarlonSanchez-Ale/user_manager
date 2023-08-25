
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Player } from '@lottiefiles/react-lottie-player';
// Import Swiper styles
import 'swiper/css';
import Author from "./Author";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Input,
    Button,
    IconButton
} from "@material-tailwind/react";
import React from 'react';
import { AiOutlineGoogle } from "react-icons/ai";
import { useAuth0 } from '@auth0/auth0-react';

export default function Welcome() {

    const { loginWithRedirect } = useAuth0();

    return (

        <section className="py-16 f" >
            <div className="container mt-20 mx-auto md:px-20">
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
                            <p className="text-orange-600 hover:text-orange-500">Welcome to the book site</p>
                        </div>
                        <div className="tittle">
                            <p className="font-bold text-3xl md:text-7xl text-blue-gray-800">Free Books</p>
                        </div>
                        <p className="text-gray-500 py-3">
                            The best free book website, find a great collection of books and learn from them.
                        </p>
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
                    </div>
                </div>
            </div>
        </section>
    )
}
