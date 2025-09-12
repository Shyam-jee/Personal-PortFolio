import { useEffect, useState } from "react";

function Navbar(){
    const [darkMode, setDarkMode]=useState(false);
    useEffect(()=>{
        if(darkMode)
        {
            document.documentElement.classList.add("dark");
        }
        else
        {
            document.documentElement.classList.remove("dark");
        }
    },[darkMode])

    function handleScroll(id){
        const section=document.getElementById(id.toLowerCase());
        if(section)
        {
            section.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow z-50">
            <h1 className="text-xl font-bold">{"<ShyamJee/>"}</h1>
            <ul className="hidden md:flex gap-6">
                {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item)=>
                <li key={item} onClick={()=>handleScroll(item)}className="cursor-pointer hover:text-blue-500">{item}</li>)}
            </ul>
            <button onClick={()=>setDarkMode(!darkMode)} className="p-2 rounded-md border dark:border-gray-600">{darkMode?"☀️":"🌙"}</button>
        </nav>
    )
}

export default Navbar;