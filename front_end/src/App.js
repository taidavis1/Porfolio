import React , {useState} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Info from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
export default function App(){
    const [Press, SetPress] = useState(false);
    return(
        <main className="bg-black text-lg font-bold overflow-x-hidden">
            <div className = {Press?"hidden":"w-screen h-screen justify-content-center grid place-content-center text-center text-white font-mono"}>
                <button onClick = {() => SetPress(!Press)} className="drop-shadow-2xl inline-block border-2 border-gray-200 px-12 py-5  hover:scale-110 transition delay-150 duration-300 ease-out">
                    <div className="flex flex-col">
                        <span>Hi, I am Tai,</span>
                        <span className="text-red-200 italic">University of California, Merced : Student</span>
                        <span>Let's Start It</span>
                    </div>
                </button>
            </div>
            {Press?
                <div>
                    <div className="bg-black fixed top-0 left-0 right-0">
                        <Navbar />
                    </div>
                    <div id="About" className="mt-12 p-5">
                        <Info/>
                    </div>
                    <div id="Projects" className="bg-white h-full w-screen md:p-5 mt-12">
                        <Projects />
                    </div>
                    <div id="Contacts"className="w-screen text-white px-5 py-10">
                        <Contact />
                    </div>                   
                </div>:null
            }
        </main>
    );
}