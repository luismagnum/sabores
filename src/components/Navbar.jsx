import React, { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import logo from '../image/logo.svg';
import car from '../image/car.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full z-50'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-[#fff] shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-50'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    <img src={logo} alt='logo' width={35}/>
                </span>
                <h1 className='text-xl ml-2 font-semibold'><span className="text-yellow-400">Sabores</span><span className='text-blue-500'> de </span><span className='text-red-600'> Venezuela</span></h1>
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
                 Tequeños
                </Link>
                <Link 
                 to='menu' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Combos
                </Link>
                <Link 
                 to='shoppingcart' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:bg-teal-500 p-1 transition-all rounded-full cursor-pointer'>
                 <img src={car} alt='car' width={20}/>
                </Link>

            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-white text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-50`}>
        <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Home
                 </Link>
                 <Link 
                 to='productos' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Productos
                 </Link>
                <Link 
                 to='about'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Tequeños
                </Link>
                <Link 
                 to='menu' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Combos
                </Link>
                <Link 
                 to='shoppingcart' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer  flex justify-center items-center'
                 onClick={closeMenu}>
                  <img src={car} alt='car' width={35} className='mx-auto'/>
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
