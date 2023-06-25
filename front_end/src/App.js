import React , {useEffect, useState} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Info from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import logo from "./logo/logo.png";
export default function App(){
    const [Load , Setload] = useState(true);
    useEffect( () => {
        setTimeout( () => Setload(false) , 4000)
    } , [])
    return(
        <>
            {Load === false ?(
                <main className="bg-black text-lg font-bold overflow-x-hidden">
                        <div>
                            <div className="bg-black fixed top-0 left-0 right-0">
                                <Navbar />
                            </div>
                            <div id="About" className="mt-12 p-5">
                                <Info/>
                            </div>
                            <div id="Projects" className="bg-white h-full w-screen">
                                <Projects />
                            </div>
                            <div id="Contacts"className="w-screen text-white px-5 py-10">
                                <Contact />
                            </div>
                        </div>:null
                </main>
            ) :(
                <div className="bg-black w-screen h-screen justify-content-center grid place-content-center text-center text-white font-mono">
                    <img className= "w-full animate-pulse" src={logo} alt="logo"/>
                </div>
            )}
        </>
    )
}