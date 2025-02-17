import React from 'react';
import { CiSearch } from "react-icons/ci";
import { PiBellRingingThin } from "react-icons/pi";
import "../styles/components/header.css"



function Header() {
  return (
    <header class="header">
        <div className='' >
            <h2 class="header__welcome">Welcome, Amanda</h2>
            <p class="header__date">Tue, 07 June 2022</p>   
        </div>
        <div class=" header_second-section " >
            <div class="header__search">
                <div>
                    <CiSearch size={ 23 } />
                </div>
                <input type="text" class="header__search-input" placeholder="Search" />
            </div>
            <div class="header__icons">
                <button class=" header__icon--notification" aria-label="Notifications">
                    <PiBellRingingThin size={ 20 } />
                </button>
                <div class="header__profile">
                    <img src="https://www.familyhandyman.com/wp-content/uploads/2019/05/Four-Wheel-Drive-Truck.jpg" width={"40px"} alt="" />
                </div>
            </div>
        </div>
      
    </header>
  )
}

export default Header
