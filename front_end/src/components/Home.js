import React from "react";
import avatar from "../logo/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin , faGithub} from "@fortawesome/free-brands-svg-icons"
export default function Info(){
    const Icon_Style = {fontSize: '40',};
    return(
        <section>
            <div className="p-2 md:p-7 md:max-xl:h-fit h-fit xl:h-screen text-white md:grid md:grid-cols-3 gap-4">
                <div className="md:p-4 font-mono md:col-span-2 h-62 tracking-wider flex flex-col">
                    <div className="flex justify-center underline italic text-sm md:max-xl:text-4xl xl:text-5xl">
                        <span>About Me:</span>
                    </div>
                    <div className="mt-2 md:mt-5 text-sm flex justify-center text-center xl:text-3xl md:text-lg">
                        <span>
                            I'm Tai Pham, a computer science student at UC Merced and a freelance web and app developer. With a passion for technology, I actively research and explore the latest advancements in computer science.

                            As a freelancer, I specialize in creating custom websites and applications for businesses. I've had the privilege of collaborating with diverse clients, helping them establish their online presence and enhance their digital capabilities.

                            I'm dedicated to delivering exceptional results, combining technical expertise with a creative mindset. I stay updated with industry best practices to develop innovative and scalable solutions that align with my clients' goals.

                            I'm an avid learner, continuously expanding my skills and engaging with the tech community. If you have a project in mind or want to discuss how we can work together, feel free to reach out. Let's bring your vision to life!
                        </span>
                    </div>
                    <div className="flex justify-center xl:text-2xl text-sm md:mt-5 text-blue-400">
                        <span>Connect With Me:</span>
                    </div>
                    <div className="md:mt-5 flex justify-center text-lg">
                        <a className="mr-6 ml-4 hover:scale-110" href="https://github.com/taidavis1?tab=repositories" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon style={Icon_Style} icon={faGithub}></FontAwesomeIcon>
                        </a>
                        <a className="mr-6 hover:scale-110" href="https://www.linkedin.com/in/tai-pham-313ba41a2/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon style={Icon_Style} icon={faLinkedin}></FontAwesomeIcon>
                        </a>            
                    </div>
                </div>
                <div className="hidden md:grid cursor-pointer h-fit xl:h-4/6 w-fit">
                    <img className="h-full w-full" src={avatar} alt="#"></img>
                </div>
            </div>
        </section>
    )
};