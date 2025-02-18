import React from 'react';
import { CiSearch } from "react-icons/ci";
import { PiBellRingingThin } from "react-icons/pi";
import "../styles/components/header.css"



function Header() {
  return (
    <header className="header">
        <div className='' >
            <h2 className="header__welcome">Welcome, Amanda</h2>
            <p className="header__date">Tue, 07 June 2022</p>   
        </div>
        <div className=" header_second-section " >
            <div className="header__search">
                <div>
                    <CiSearch size={ 23 } />
                </div>
                <input type="text" className="header__search-input" placeholder="Search" />
            </div>
            <div className="header__icons">
                <button className=" header__icon--notification" aria-label="Notifications">
                    <PiBellRingingThin size={ 20 } />
                </button>
                <div className="header__profile">
                    <img src="https://www.familyhandyman.com/wp-content/uploads/2019/05/Four-Wheel-Drive-Truck.jpg" width={"40px"} alt="" />
                </div>
            </div>
        </div>
      
    </header>
  )
}

export default Header
