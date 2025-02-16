import React from 'react';
import { BiSolidDashboard } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { MdWork } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoCallSharp } from "react-icons/io5";
import { RiSettings4Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import "../styles/components/sidebar.css"





function Sidebar() {
  return (
    <aside class="sidebar">
        <div class="sidebar__logo">
            <img src="./public/assets/logo.svg" alt="" />
        </div>
        <div className='sidebar_input' >
            <CiSearch size={ 23 } />
            <input type="text" placeholder='Search' />
        </div>
        <nav class="sidebar__menu">
            <div>
                <h4>
                    menu
                </h4>
            </div>
            <div class="sidebar__menu-item ">
                <BiSolidDashboard />
                <p>Dashboard</p>
            </div>
            <div class="sidebar__menu-item">
                <MdWork />
                <p>Job</p>
            </div>
            <div class="sidebar__menu-item">
                <LuMessageSquareMore />
                <p>Message</p>
            </div>
            <div class="sidebar__menu-item">
                <IoCallSharp />
                <p>Call</p>
            </div>
            <div class="sidebar__menu-item">
                <RiSettings4Fill />
                <p>Settings</p>
            </div>
        </nav>
        <div class="sidebar__logout">
            <button class="sidebar__logout-btn">
                <IoLogOut size={24} />
                Logout
            </button>
        </div>
        
  </aside>
  )
}

export default Sidebar
