import { logo, close, menu } from '../assets';
import {navLinks} from '../constants'
import { useState } from 'react';

const Navbar =()=> {
    const [toggle, setToggle] = useState(false);
    
    return (
        <nav className='w-full py-6 flex justify-between items-center flex-1 navbar'>
            <img src={logo} alt="hubobank" className="w-[124px] h-[32px]"/>
            
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((navigg, index) => (
                    <li key={navigg.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} key={navigg.id} >
                        <a href={`#${navigg.id}`}>
                            {navigg.title}
                        </a>
                    </li>
                ))}
            </ul>

             <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img className='w-[24px] h-[24px] object-contain' src={toggle ? close : menu} alt="menu" onClick={()=> setToggle((prev) => !prev)} />
            </div>

            <div className=
            {`${toggle ? 'flex' : 'hidden'} sidebar p-6  top-20 right-0 bg-black-gradient my-2 mx-4 rounded-xl absolute min-w-[140px]`}>
                <ul className='list-none flex flex-col flex-1 column justify-end items-center'>
                {navLinks.map((navigg, index) => (
                    <li key={navigg.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`} key={navigg.id} >
                        <a href={`#${navigg.id}`}>{navigg.title}</a>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
