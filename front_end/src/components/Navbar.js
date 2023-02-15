import React, { useState} from "react";
import logo from "../logo/logo.png";
import resume1 from "../resume/tai-resume.pdf";
import {HiBars3CenterLeft} from "react-icons/hi2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark , faFileArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin , faGithub} from "@fortawesome/free-brands-svg-icons"
export default function Navbar(){
    const Icon_Style = {fontSize: '30',};
    const [Click , setClick] = useState(false);
    const [Scroll , SetScroll] = useState(false);
    const Change_color = () => {
        if(window.scrollY >= 10){
            SetScroll(true);
        }
        else{SetScroll(false);}
    };
    window.addEventListener('scroll' , Change_color);
    return (
        <header>
            <div className={Scroll?'flex bg-white text-black justify-between mx-auto items-center p-5 z-50 tracking-wider w-screen md:h-24 h-16': 'container justify-between mx-auto flex text-center items-center p-3 text-white z-50 tracking-wider w-screen md:h-24 h-16'}>
                <div className="block cursor-pointer">
                    <img className= "w-14 md:w-20 rounded-full hover:opacity-75 hover:animate-bounce" src={logo} alt="logo"/>
                </div>
                <div className={!Scroll?"drop-shadow-2xl outlined-none md:outline-dashed sm:border-none hover:opacity-75 cursor-pointer ml-5 px-4 py-2 md:px-10 md:py-3 md:hover:scale-110 transition delay-150 duration-300 ease-out": " hover:opacity-75 cursor-pointer ml-5 px-4 py-2 md:px-10 md:py-3 hover:scale-110 transition delay-150 duration-300 ease-out outlined-none md:outline-dashed"}>
                    <button className="justify-center tracking-wide">
                        <a href={resume1} className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="mr-1" icon = {faFileArrowDown}></FontAwesomeIcon> Resume
                        </a>
                    </button>
                </div>
                <nav className="hidden md:flex cursor-pointer">
                    <a className=" mr-7 hover:scale-110   hover:text-green-400 transition ease-in-out delay-150 duration-200" href="#About">About</a>
                    <a className=" mr-7 hover:scale-110   hover:text-green-400 transition ease-in-out delay-150 duration-200" href="#Projects">Projects</a>
                    <a className=" mr-7 hover:scale-110   hover:text-green-400 transition ease-in-out delay-150 duration-200" href="#Contacts">Contact</a>
                    <a className="mr-3 hover:scale-110" href="https://www.linkedin.com/in/tai-pham-313ba41a2/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon style={Icon_Style} icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                    <a className="mr-3 hover:scale-110" href="https://github.com/taidavis1?tab=repositories" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon style={Icon_Style} icon={faGithub}></FontAwesomeIcon>
                    </a>
                </nav>
                <div onClick={() => setClick(!Click)} className={Scroll? "hover:animate-bounce md:hidden button cursor-pointer text-black":"hover:animate-bounce md:hidden button cursor-pointer text-white"}>
                    {!Click?
                        <HiBars3CenterLeft  style ={Icon_Style}/>:
                        <FontAwesomeIcon  icon = {faXmark} style = {Icon_Style}></FontAwesomeIcon>
                    }
                </div>
            </div>
            {Click?
                <div className="opacity-95 w-screen bg-black transition duration-700 ease-out md:hidden fixed top-16 left-0 right-0 z-1 text-2xl h-screen mx-auto justify-center text-center text-white">
                    <nav className="flex flex-col relative top-1/4">
                        <a onClick={() => setClick(!Click)} className=" mb-1 hover:text-green-400 hover:scale-110 transition ease-in-out delay-150 duration-200" href="#Home">About</a>
                        <a onClick={() => setClick(!Click)} className=" mb-1 hover:text-green-400 hover:scale-110 transition ease-in-out delay-150 duration-200" href="#Projects">Projects</a>
                        <a onClick={() => setClick(!Click)} className=" mb-1 hover:text-green-400 hover:scale-110 transition ease-in-out delay-150 duration-200" href="#Contacts">Contact</a>
                    </nav>
                </div>
                :null
            }
        </header>
    );
}