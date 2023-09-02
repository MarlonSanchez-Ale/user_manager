import { useAuth0 } from "@auth0/auth0-react";
import {
    Typography,
    Button,
    IconButton,
    Navbar,
    Collapse
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

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
        <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            <Typography
                as="li"
                color="white"
                className="p-1 font-normal"
            >
                <Link to="/" className="flex items-center">
                    Home
                </Link>
            </Typography>
            {isAuthenticated && (
                <>
                    <Typography
                        as="li"
                        color="white"
                        className="p-1 font-normal"
                    >
                        <Link to="/collection" className="flex items-center">
                            My Collection
                        </Link>
                    </Typography>
                    <Button size="sm" className="bg-blue-gray-800 group-hover:bg-blue-gray-700" onClick={() => logout()}>
                        <span>Logout</span>
                    </Button>
                </>
            )}

            {!isAuthenticated && (
                <Button variant="gradient" size="md" className="my-2 hidden lg:block" onClick={() => loginWithRedirect()}>
                    <span>Login</span>
                </Button>
            )}
        </ul>
    );


    return (
        <>
            <Navbar className="mx-auto h-max max-w-full sticky top-0 z-10 py-2 px-4 rounded-none bg-blue-gray-800  lg:px-8 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                    >
                        Free Books
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
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
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {isAuthenticated && (
                            <>{navList}</>
                        )}
                        {!isAuthenticated && (
                            <Button variant="gradient" size="sm" fullWidth className="my-3" onClick={() => loginWithRedirect()}>
                                <span>Login</span>
                            </Button>
                        )}
                    </div>
                </Collapse>
            </Navbar>
        </>
    )
}


