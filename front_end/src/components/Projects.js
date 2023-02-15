import React from "react";
import v3 from "../img/v3.png"
import logo from "../img/nail_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import thagi3 from "../img/thagi3.png"
export default function Projects(){
    const Icon_Style = {fontSize: '40',};
    return(
        <section>
            <div className=" md:px-[5rem] md:py-[4rem] ">
                <div className="md:hidden text-center text-black underline italic text-lg">
                    <h1>Projects</h1>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 h-full xl:max-w-fit w-full max-xl:h-fit xl:h-4/5 md:mx-auto mt-3">
                    <div className="md:p-3 text-black bg-white shadow-lg transition ease-in-out delay-150 duration-200 rounded-md flex flex-col text-center font-mono tracking-wider">
                        <img className="md:block md:w-full md:h-fit hidden" alt="#" src={thagi3} />
                        <div className="md:mt-5 md:text-2xl text-blue-400 underline">Thagi Shop</div>
                        <div className="md:p-2">
                            <div className="xl:text-xl text-sm">
                                <span>Website To Sell Caligraphy</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Using Cpanel To Host the Web</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Front End: HTML,Javascript,Css</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Back-End: Python(Flask)</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Database Used: MySQL</span>
                            </div>
                            <div className="mt-2">
                                <a href="https://github.com/taidavis1/nail-system" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon style={Icon_Style} icon={faGithub}></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                        <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                            <button className="tracking-wide">
                                <a href="https://thagi3.com/" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                                    Take A Look!
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="md:p-3 bg-black text-white shadow-lg flex flex-col text-center transition ease-in-out delay-150 duration-200 rounded-md font-mono track md:tracking-wider">
                        <img className="md:block md:w-full md:h-fit hidden" alt="#" src={v3} />
                        <div className="md:mt-5 md:text-2xl text-blue-400 underline">V3 Manufacturing</div>
                        <div className="md:p-2">
                            <div className="xl:text-xl text-sm">
                                <span>Website for Local Machine Shop</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Using Godaddy To Host the Web</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Front End: HTML,Javascript,CSS</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Back-End: Python(Flask)</span>
                            </div>
                            <div className="mt-2">
                                <a href="https://github.com/taidavis1/v3mfg" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon style={Icon_Style} icon={faGithub}></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                        <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                            <button className="tracking-wide">
                                <a href="https://v3mfg.com/" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                                    Take A Look!
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="md:p-3 bg-gray-200 shadow-lg  transition ease-in-out delay-150 flex flex-col text-center duration-200 rounded-md font-mono tracking-wider">
                        <img className="md:block md:w-full md:h-fit hidden" alt="#" src={logo} />
                        <div className="md:mt-5 md:text-2xl text-blue-400 underline">Nail Salon</div>
                        <div className="md:p-2">
                            <div className="xl:text-xl text-sm">
                                <span>App Management Systems</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Database Used: MySQL</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Front End:React Natives</span>
                            </div>
                            <div className="xl:text-xl text-sm">
                                <span>Back-End: Python</span>
                            </div>
                            <div className="mt-2">
                                <a href="https://github.com/taidavis1/nail-system" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon style={Icon_Style} icon={faGithub}></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                        <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                            <button className="tracking-wide">
                                <a href="https://drive.google.com/file/d/1Km6Ub2ut7Fepkoyqs-B5SEger8aMOz1f/view" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                                    Take A Look!
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}