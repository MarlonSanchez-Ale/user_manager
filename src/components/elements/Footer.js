import { ImFacebook2, ImYoutube, ImTwitter } from "react-icons/im";
import Newlatter from "./NewLatter";

export default function Footer() {
    return (
        <footer className="bg-gray-50">
            <Newlatter />
            <div className="container mx-auto flex justify-center ">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                       
                            <ImFacebook2 color="#888888" />
                     
                       
                            <ImYoutube color="#888888" />
                      
                      
                            <ImTwitter color="#888888" />
                        
                    </div>
                    <p className="py-5 text-gray-400">Copyright @2023 All rights reserved | This template is made with by Marlon Sanchez </p>
                    <p className="py-5 text-gray-300 text-center">Terms & Condition</p>
                </div>
            </div>
        </footer>
    )
}