import {React , useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMessage} from '@fortawesome/free-regular-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { Form } from "react-bootstrap";
import axios from "axios"
export default function Contact(){
    const [Show, setShow]= useState(false);
    const Icon_Style = {fontSize: '30',};
    const [email , setEmail] = useState("");
    const [name , setName] = useState("");
    const [msg , setMsg] = useState("");
    const send = async (e) =>{
        e.preventDefault();
        const data = {
            name,
            email,
            msg
        }
        const response = await axios.post("http://localhost:5000/api/send_email" , data)
        if (response.data['success']){
            alert("Thank you for your feedback! ");
            window.location.reload(false);
        }
        else{
            alert("Email Not Sending !");
        };

        console.log(response.data)
    };
    return(
        <section className="contact">
            <div className="md:text-4xl underline text-lg flex flex-row justify-center cursor-pointer">
                <button className="italic font-mono tracking-tight" onClick={() => setShow(!Show)} data-bs-toggle = "modal" data-bs-target = "#popup"> Contact Me
                    <FontAwesomeIcon className="ml-7" icon = {faMessage}></FontAwesomeIcon>
                </button>
            </div>
            {Show?
                <div className="justify-center top-24 flex overflow-x-hidden overflow-y-auto fixed inset-0 text-black z-50">
                    <div className="relative w-3/4 md:w-full my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-3 rounded-t">
                                <button className="p-1 ml-auto text-black float-right" onClick = {() => setShow(false)}>
                                    <FontAwesomeIcon  icon = {faXmark} style = {Icon_Style}></FontAwesomeIcon>
                                </button>
                            </div>
                            <Form className="ml-5" onSubmit={send}>
                                <div className="mb-2 ml-5">
                                    <label for="name" className="md:text-lg text-sm block text-gray-800">
                                        Name: 
                                    </label>
                                    <input onChange= {(e) => setName(e.target.value)} value = {name} className="px-4 py-1 mt-2 border-blue-200 border-2 rounded-xl w-11/12 focus:outline-none " type= "name"/>
                                </div>
                                <div className="mb-2 ml-5">
                                    <label for="email" className="md:text-lg text-sm block text-gray-800">
                                        Email: 
                                    </label>
                                    <input onChange= {(e) => setEmail(e.target.value)} value = {email} className="px-4 py-1 mt-2 border-blue-200 border-2 rounded-xl w-11/12 focus:outline-none " type= "email"/>
                                </div>
                                <div className="mb-2 ml-5">
                                    <label for="messages" className="md:text-lg text-sm block text-gray-800">
                                        Messages: 
                                    </label>
                                    <textarea onChange= {(e) => setMsg(e.target.value)} value= {msg} className="resize-none px-4 py-1 mt-2 border-blue-200 border-2 rounded-xl w-11/12 focus:outline-none " type= "text">
                                    </textarea>
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="justify-center tracking-wide px-6 text-white rounded-lg hover:opacity-75 uppercase bg-black py-2 mb-6">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            :null }
        </section>
    )
};