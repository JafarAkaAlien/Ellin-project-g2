import React from 'react'
import logo from "../../assets/logo.png"
import "./Terefdashlar.css"

function Terefdashlar() {
  return (
    <section>
        <h1>Tərəfdaşlarımız</h1>
        <p className='text-1'>Azərbaycanın aparıcı şirkətləri ilə əməkdaşlıq edirik</p>
        <div className='container'>
            <div className="box">
                <img src={logo} alt="" />
                <h5>Dövlət Məşğulluq Agentliyi</h5>
                <p>Dövlət Qurumu</p>
            </div>
            <div className="box">
                <img src={logo} alt="" />
                <h5>SOCAR</h5>
                <p>Enerji</p>
            </div>
            <div className="box">
                <img src={logo} alt="" />
                <h5>PASHA Holding</h5>
                <p>Holding</p>
            </div>
            <div className="box">
                <img src={logo} alt="" />
                <h5>Azercell</h5>
                <p>Telekommunikasiya</p>
            </div>
            <div className="box">
                <img src={logo} alt="" />
                <h5>Kapital Bank</h5>
                <p>Bank</p>
            </div>
            <div className="box">
                <img src={logo} alt="" />
                <h5>ASCO</h5>
                <p>Aviasiya</p>
            </div>
        </div>
    </section>
  )
}

export default Terefdashlar