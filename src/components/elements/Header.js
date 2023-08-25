import { BsFacebook, BsFillPersonFill, BsYoutube } from "react-icons/bs";
import { AiOutlineAppstoreAdd, AiOutlineUser } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import {
    Typography,
    Button,
    IconButton,
    Navbar,
    MobileNav,
} from "@material-tailwind/react";
import React from "react";

export default function Header() {

    const { isAuthenticated, logout, loginWithRedirect } = useAuth0()
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Register
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Collection
                </a>
            </Typography>
            <Button size="sm" className="bg-blue-gray-500 group-hover:bg-blue-gray-400" onClick={() => logout()}>
                <span>Logout</span>
            </Button>
        </ul>
    );


    return (
        <>
            <Navbar className="bg-blue-gray-800 sticky top-0 z-10 h-max max-w-full rounded-none">
                <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                    <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                        <AiOutlineAppstoreAdd size={35} color="white" />
                    </div>

                    <div className="shrink w-80 sm:order-2">
                        <p className="font-bold md:text-xl text-gray-200">Free Books</p>
                    </div>
                    <div className="w-96 order-3 flex justify-center">
                        <div className="flex gap-6">

                            {isAuthenticated ? (

                                <>{navList}</>
                            )
                                : (
                                    <IconButton variant="text" onClick={() => loginWithRedirect()}>
                                        <BsFillPersonFill size={20} color="gray" />
                                    </IconButton>
                                )

                            }

                            <IconButton variant="text">
                                <BsFacebook size={20} color="gray" />
                            </IconButton>
                            <IconButton variant="text">
                                <BsYoutube size={20} color="gray" />
                            </IconButton>
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                </div>

                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Buy Now</span>
                    </Button>
                </MobileNav>
            </Navbar>
        </>
    )
}


/*

   {isAuthenticated ? (

                                <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                    <Typography
                                        as="li"
                                        variant="small"
                                        color="white"
                                        className="p-1 font-normal"
                                    >
                                        <a href="#" className="flex items-center">
                                            Register
                                        </a>
                                    </Typography>
                                    <Typography
                                        as="li"
                                        variant="small"
                                        color="white"
                                        className="p-1 font-normal"
                                    >
                                        <a href="#" className="flex items-center">
                                            Collection
                                        </a>
                                    </Typography>
                                    <Button size="sm" className="bg-blue-gray-500 group-hover:bg-blue-gray-400" onClick={() => logout()}>
                                        <span>Logout</span>
                                    </Button>
                                </ul>
                            )
                                : (
                                    <IconButton variant="text" onClick={() => loginWithRedirect()}>
                                        <BsFillPersonFill size={20} color="gray" />
                                    </IconButton>
                                )

                            }


*/