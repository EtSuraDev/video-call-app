import React, { useState } from 'react';
import { BiSolidDashboard } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { MdWork } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoCallSharp } from "react-icons/io5";
import { RiSettings4Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


import "../styles/components/sidebar.css"





function Sidebar() {
    const [viwe, setViwe] = useState(false)


  return (
    <aside className="sidebar">
      
        <div className=' main_side_bar '>
              <div className="sidebar__logo">
                <img src="./public/assets/logo.svg" alt="" />
            </div>
            <div className='sidebar_input' >
                <CiSearch size={ 23 } />
                <input type="text" placeholder='Search' />
            </div>
            <nav className="sidebar__menu">
                <div>
                    <h4>
                        menu
                    </h4>
                </div>
                <div className="sidebar__menu-item ">
                    <BiSolidDashboard />
                    <p>Dashboard</p>
                </div>
                <div className="sidebar__menu-item">
                    <MdWork />
                    <p>Job</p>
                </div>
                <div className="sidebar__menu-item">
                    <LuMessageSquareMore />
                    <p>Message</p>
                </div>
                <div className="sidebar__menu-item">
                    <IoCallSharp />
                    <p>Call</p>
                </div>
                <div className="sidebar__menu-item">
                    <RiSettings4Fill />
                    <p>Settings</p>
                </div>
            </nav>
            <div className="sidebar__logout">
                <button className="sidebar__logout-btn">
                    <IoLogOut size={24} />
                    Logout
                </button>
            </div>
        </div>


        <div className='' >
        {
            viwe?
            (
                <div className=' hidden_side_bar ' >
                    <div className="sidebar__logo">
                        <IoMdClose size={23} onClick={ () => setViwe(false) } />
                    </div>
                    <div className='sidebar_input' >
                        <CiSearch size={ 23 } />
                        <input type="text" placeholder='Search' />
                    </div>
                    <nav className="sidebar__menu">
                        <div>
                            <h4>
                                menu
                            </h4>
                        </div>
                        <div className="sidebar__menu-item ">
                            <BiSolidDashboard />
                            <p>Dashboard</p>
                        </div>
                        <div className="sidebar__menu-item">
                            <MdWork />
                            <p>Job</p>
                        </div>
                        <div className="sidebar__menu-item">
                            <LuMessageSquareMore />
                            <p>Message</p>
                        </div>
                        <div className="sidebar__menu-item">
                            <IoCallSharp />
                            <p>Call</p>
                        </div>
                        <div className="sidebar__menu-item">
                            <RiSettings4Fill />
                            <p>Settings</p>
                        </div>
                    </nav>
                    <div className="sidebar__logout">
                        <button className="sidebar__logout-btn">
                            <IoLogOut size={24} />
                            Logout
                        </button>
                    </div>
                    
                </div>
            )
            :
            (
                <div className='side_bar_toggle'>
                    <button  onClick={ () => setViwe(true) } >
                        <RxHamburgerMenu />
                    </button>
                </div>
                
            )
        }
        </div>
        
  </aside>
  )
}

export default Sidebar
