import React from 'react'
import Logo from "/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div className='bg-blue-500 p-4'>
            <div className='flex justify-between text-white'>
                <p className='text-xl'>NVC Training Center</p>
                <div className=' space-x-5'>
                    <NavLink to="/" className=''>
                        หน้าแรก
                    </NavLink>
                    <NavLink to='/course'>
                        หลักสูตรที่เปิดสอน
                    </NavLink>

                    <NavLink to='/contact'>
                        ติดต่อ
                    </NavLink>
                </div>

            </div>
 
        </div>
    </nav>
  )
}

export default Navbar