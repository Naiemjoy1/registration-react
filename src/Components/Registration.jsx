import React, { useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const Registration = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    // console.log({name: name, email: email, password: password});
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (!isChecked) {
            return;
        }

        const user ={
            name: name,
            email: email,
            password: password
        }
        console.log(user);
        setIsSubmit(true);
        toast("Submitted")
    }

    return (
        <div className=' h-screen w-full flex justify-center items-center bg-purple-400'>
            <form onSubmit={(event) => handleSubmit(event)} className=' w-2/3 lg:w-1/3 lg:2/5 bg-white rounded shadow-lg p-8'>
                <h1 className=' text-4xl mb-6 text-purple-500 text-center'>Signup Form</h1>

                <label className="input input-bordered flex items-center gap-2 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input 
                    onChange={(event) => setName(event.target.value)}
                    type="text" className="grow" placeholder="Username" required />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input 
                    onChange={(event) => setEmail(event.target.value)}
                    type="text" className="grow" placeholder="Email" required/>
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input 
                    onChange={(event) => setPassword(event.target.value)}
                    type="password" className="grow" value="password" required/>
                </label>

                <div className=' flex items-center gap-4 mt-4'>
                <input type="checkbox" onChange={(event) => setIsChecked(event.target.checked)} className="checkbox" /> 
                <p>do you agree</p>
                </div>

                <div className=' flex justify-end '>
                <button className="btn btn-secondary mt-4">SignUp</button>
                </div>
            </form>

            {
                isSubmit && (
                    <div className=' fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500'>
                    <div className=' w-1/2 h-1/2 rounded bg-purple-300 p-10 text-center'>
                        <h1 className=' text-white font-bold text-3xl'>You Have submitted the form successfully!</h1>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                    </div>
            </div>
                )
            }
        </div>
    );
};

export default Registration;