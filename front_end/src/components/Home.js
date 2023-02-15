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
                    <div className="mt-2 md:mt-5 text-sm flex justify-center xl:text-3xl md:text-lg">
                        <span>Currently Attended UC Merced</span>
                    </div>
                    <div className="flex text-sm justify-center xl:text-3xl md:text-lg">
                        <span>Major In Computer Science</span>
                    </div>
                    <div className="flex text-sm  justify-center xl:text-3xl md:text-lg">
                        <span>Will Graduate In May 15,2024</span>
                    </div>
                    <div className="flex text-sm justify-center xl:text-3xl md:text-lg">
                        <span>Getting My Bachelors Degree....</span>
                    </div>
                    <div className="flex  text-sm justify-center xl:text-3xl md:text-lg">
                        <span>Research in UC Merced</span>
                    </div>
                    <div className="flex  text-sm justify-center xl:text-3xl md:text-lg">
                        <span>Department of Mechanical Engineer Lab</span>
                    </div>
                    <div className="flex text-sm justify-center xl:text-3xl md:text-lg">
                        <span>Freelancer for about 2 years</span>
                    </div>
                    <div className="flex text-sm justify-center xl:text-3xl md:text-lg">
                        <span>Have Develop some websites and app</span>
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