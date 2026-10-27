import React from "react";
import Moon from "../../assets/moon.png";
import E from "../../assets/ilk.png";
import "./Header.css";

const Header = () => {
  return (
     <div className='enke-div'>
      <div className='foot'>
        <div className='sol-logo'>
          <div className='solyan'> <button><img src={E} alt="" /></button></div>
          <div className='ustxet'>
            <h1>ELLIN MMC</h1>
            <p>Peşə Hazırlıq Mərkəzi</p>
          </div>

        </div>
        <div className='nav-divi'>
          <ul>
            <li><span> Ana səhifə </span></li>
            <li>Kurslar</li>
            <li>Müəllimlər</li>
            <li>Tələbələr</li>
            <li>Uğur hekayələri</li>
            <li>Əlaqə</li>
          </ul>
        </div>
        <div className='sag-btn'>
         <i class="fa-regular fa-moon">  </i>
         <i class="fa-solid fa-plus"></i>
          <button className='daxil'>Daxil ol</button>
          <button className='deyis'>Qeydiyyat</button>
        </div>
      </div>
    </div>
  )
}

export default Header