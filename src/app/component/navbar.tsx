"use client";
import Image from "next/image";
import Link from "next/link";
import cart from "../../assets/cart.svg";
import { useState , useEffect } from "react";
import Login from "./login";
import Signup from "./signup";
import { supabase } from "../lib/supabase";

const Navbar = function Navbar() {
  const [clickedlogin , setclickedlogin] = useState(false);
  const [clickedsignup, setclickedsignup] = useState(false);
  const [isloggedin , setloggedin] = useState(false);

  useEffect(()=>{
    const checkauth = async () =>{
      const {data:{session}} = await supabase.auth.getSession();
      setloggedin(!!session);
    }
  })



  const setclickedtrue = () => {
    setclickedlogin(true)
  }
  const setclickedfalse = () => {
    setclickedlogin(false)
  }
  const setsigntrue = () => {
    setclickedsignup(true)
  }
  const setsignfalse = () => {
    setclickedsignup(false)
  }
  return (
    <nav className={`bg-transparent w-full absolute`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <span className=" cursor-pointer ml-2 text-2xl font-bold">
              <Link href="/" className="cursor-pointer text-white  hover:underline text-underline-offset-auto ">
                manga store
              </Link>
            </span>
          </div>
          
          <div className="flex-1 flex justify-center space-x-4 text-xl">
          
            <Link href="/products" className="cursor-pointer text-white  hover:underline text-underline-offset-auto ">
              products
            </Link>
            
            <Link href="/about" className="cursor-pointer text-white  hover:underline text-underline-offset-auto ">
              about
            </Link>
            
            <Link href="https://github.com/ayoubbijarche/posters-store-nextjs" className="cursor-pointer text-white  hover:underline text-underline-offset-auto ">
              repo
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 text-xl">
            <Link href="/cart" className="cursor-pointer text-white ">
              <Image src={cart} alt="cart" className="w-10"></Image>
            </Link>

            {
              isloggedin? <h1>logged in as </h1> : 
            <button onClick={setclickedtrue} className="border-white text-white w-14 h-8 rounded-md border-2 duration-500 hover:bg-white hover:text-black">
              Login
            </button>
            }

          </div>
        </div>
      </div>
        {clickedlogin? <Login setclickedfalse={setclickedfalse} setclickedsign={setsigntrue}/> : !clickedlogin}
        {clickedsignup? <Signup setclickedfalse={setsignfalse}/>: !clickedsignup}
    </nav>
  );
};

export default Navbar;
