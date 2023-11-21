import React, { useState } from 'react';
import {Link} from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from '../layouts/Button';
import { IoClose } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import logo from '../image/logo.svg';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    <img src={logo} alt='' width={30}/>
                </span>
                <h1 className='text-xl font-semibold'>Sabores de Venezuela</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Home
                 </Link>
                <Link 
                 to='productos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Productos
                 </Link>
                <Link 
                 to='about'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 About
                </Link>
                <Link 
                 to='menu' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Menu
                </Link>
                <Link 
                 to='fotos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                    Fotos
                </Link>

                <Button className="cursor-pointer" title="Encargar"/>
            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} />
                ):(
                    <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-9 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Home
                 </Link>
                 <Link 
                 to='productos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Productos
                 </Link>
                <Link 
                 to='about'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 About
                </Link>
                <Link 
                 to='menu' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Menu
                </Link>
                <Link 
                 to='fotos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                    Fotos
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
