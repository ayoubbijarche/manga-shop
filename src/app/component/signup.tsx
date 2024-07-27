"use client";
import {useState} from 'react';
import { supabase } from '../lib/supabase';
import Link from 'next/link';



const SignIn = async function SignIn({email , password} : {email:string , password:string}){
  const {error} = await supabase.auth.signInWithPassword({
    email : email , 
    password : password,
  });
}




const Signup = function Signup({setclickedfalse} : {setclickedfalse : any}){
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [name , setName] = useState('');

  const handleSignup = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const {error} = await supabase
                        .auth.signUp({
                          email : email,
                          password : password,
                        })
      if (error) throw error;
      SignIn(email , password)
    }catch(error){
      throw error;
    }
  }

  return (
    <div className="w-full h-[600px] flex absolute top-0  justify-center  content-center  bg-black bg-opacity-65">
      <div className="w-[380px] h-[520px] bg-white rounded-xl mt-10 flex flex-col">
        <button onClick={setclickedfalse} className="ml-[19rem] mt-3 text-2xl">X</button>
        <h1 className="self-center mt-5 text-3xl">Welcome</h1>
        <p className=" self-center text-xl text-gray-500">get the best high quality manga's!!</p>
        <form onSubmit={handleSignup} className='flex flex-col justify-center items-center'>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-white w-80 mt-5 p-2 border-2 border-black rounded-[0.5rem]'            
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white w-80 mt-3 p-2 border-2 border-black rounded-[0.5rem]'            
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white w-80 mt-3 p-2 border-2 border-black rounded-[0.5rem]'            
          />
          <button className="mt-2 w-80 border-black text-xl text-black h-11 rounded-md border-2 duration-500 hover:text-white hover:bg-black ">Sign Up</button>
        </form>
          <p className='self-center text-xl mt-1'>create an account & join us</p>
      </div>
    </div>
  );
}

export default Signup;
