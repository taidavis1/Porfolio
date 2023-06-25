import React from "react";
import v3 from "../img/v3.jpg"
import logo from "../img/nail_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import thagi3 from "../img/thagi3.jpg"
import research from "../img/research.png"
import chatgpt from "../img/chatgpt.png"
import dtwin from "../img/digital-twin-social.jpg"
import AD from "../img/AD.png"
import sl from "../img/sl.png"
import hapi from "../img/hapi.png"
export default function Projects(){
    const Icon_Style = {fontSize: '40',};
    return(
        <section className="md:pt-12">
            <div className="text-center text-black flex justify-center underline italic text-sm md:max-xl:text-4xl xl:text-5xl">
                <h1>Projects</h1>
            </div>
            <div className="container mx-auto px-5 py-12">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 h-full xl:max-w-fit w-full max-xl:h-fit xl:h-4/5 md:mx-auto">
                        <div className="md:p-3 text-black bg-white shadow-lg transition ease-in-out delay-150 duration-200 rounded-md flex flex-col text-center font-mono tracking-wider">
                            <img className="md:block md:w-full md:h-fit hidden hover:scale-110  transition duration-500" alt="#" src={thagi3} />
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
                            <img className="md:block md:w-full md:h-fit hidden hover:scale-110  transition duration-500" alt="#" src={logo} />
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
                        <div className="md:p-3 text-black bg-white shadow-lg transition ease-in-out delay-150 duration-200 rounded-md flex flex-col text-center font-mono tracking-wider">
                            <img className="md:block md:w-full md:h-fit hidden hover:scale-110  transition duration-500" alt="#" src={research} />
                            <div className="md:mt-5 md:text-2xl text-blue-400 underline">Weather Prediction</div>
                            <div className="md:p-2">
                                <div className="xl:text-xl text-sm">
                                    <span>
                                        A research with Neural Network to conduct a weather forecasting. With the use of TensorFlow2, Pandas , Python, and Kaggle for Data 
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <a href="https://github.com/taidavis1/temperature_prediction" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon style={Icon_Style} icon={faGithub}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                            <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                                <button className="tracking-wide">
                                    <a href="https://github.com/taidavis1/temperature_prediction" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                                        Take A Look!
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="md:p-3 bg-black text-white shadow-lg flex flex-col text-center transition ease-in-out delay-150 duration-200 rounded-md font-mono track md:tracking-wider">
                            <img className="md:block md:w-full hidden" alt="#" src={chatgpt} />
                            <div className="md:mt-5 md:text-2xl text-blue-400 underline">Chatbot</div>
                            <div className="md:p-2">
                                <div className="xl:text-xl text-sm">
                                    <span>An App develop with Qt using C++ , Cmakes , and OpenAI API in order to use the same function as chatGPT

                                    </span>
                                </div>
                                <div className="mt-2">
                                    <a href="https://github.com/taidavis1/chatbot_QT" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon style={Icon_Style} icon={faGithub}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                            <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                                <button className="tracking-wide">
                                    <a href="https://github.com/taidavis1/chatbot_QT" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                                        Take A Look!
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="md:p-3 bg-white shadow-lg cursor-pointer flex flex-col text-center rounded-md font-mono tracking-wider">
                            <img className="md:block md:w-full md:h-fit hidden hover:scale-110  transition duration-500" alt="#" src={dtwin} />
                            <div className="md:mt-5 md:text-2xl text-blue-400 underline">Digital Twin </div>
                            <div className="md:p-2">
                                <div className="xl:text-xl text-sm">
                                    <span>Program for Stepper Motor using AWS IoTmaker, AWSRdx , python, raspberry pi, Stepper Motor, and DS18B20 </span>
                                </div>
                                <div className="mt-2">
                                    <a href="https://github.com/taidavis1/Stepper_Motor" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon style={Icon_Style} icon={faGithub}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </div>
                            <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                                <button className="tracking-wide">
                                    <a href="https://github.com/taidavis1/Stepper_Motor" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                                        Take A Look!
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="md:p-3 text-black bg-white shadow-lg transition ease-in-out delay-150 duration-200 rounded-md flex flex-col text-center font-mono tracking-wider">
                            <img className="md:block md:w-full md:h-fit hidden hover:scale-110  transition duration-500" alt="#" src={hapi} />
                            <div className="md:mt-5 md:text-2xl text-blue-400 underline">Hapi Logistic</div>
                            <div className="md:p-2">
                                <div className="xl:text-xl text-sm">
                                    <span>
                                        A Website manage a logistics company and offer services for customers. Build with Tailwind Css and React
                                    </span>
                                </div>
                            </div>
                            <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                                <button className="tracking-wide">
                                    <a href="https://www.hapilogi.co.jp/" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                                        Take A Look!
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="md:p-3 bg-black text-white shadow-lg flex flex-col text-center transition ease-in-out delay-150 duration-200 rounded-md font-mono track md:tracking-wider">
                            <img className="md:block md:w-full hidden" alt="#" src={sl} />
                            <div className="md:mt-5 md:text-2xl text-blue-400 underline">Smartlog Logistic</div>
                            <div className="md:p-2">
                                <div className="xl:text-xl text-sm">
                                    <span> A Website manage a logistics company and offer services for customers. Build with Tailwind Css and React</span>
                                </div>
                            </div>
                            <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                                <button className="tracking-wide">
                                    <a href="https://gosmartlog.com/" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
                                        Take A Look!
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="md:p-3 bg-white shadow-lg cursor-pointer flex flex-col text-center rounded-md font-mono tracking-wider">
                            <img className="md:block md:w-full md:h-fit hidden hover:scale-110  transition duration-500" alt="#" src={AD} />
                            <div className="md:mt-5 md:text-2xl text-blue-400 underline">Anh Duong Logistic </div>
                            <div className="md:p-2">
                                <div className="xl:text-xl text-sm">
                                    <span>A migrated website from wordpress to Laravel for a logistic company in Vietnam</span>
                                </div>
                            </div>
                            <div className="hover:opacity-75 cursor-pointer w-11/12 ml-4 md:bg-green-300 px-5 py-2 md:mt-5">
                                <button className="tracking-wide">
                                    <a href="https://anhduonglogistics.com/" className="text-sm md:text-lg" target="_blank" rel="noreferrer">
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
