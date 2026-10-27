
import React from 'react';
import './Footer.css';
import E from '../../assets/ilk.png';

const Footer = () => {
  return (
    <div className='enenkeDiv'>
      <div className='footer-top'>
        <div className='Ellin'>
          <div className='ellininki'>
            <div className='solIlkUst'>
              <img src={E} alt="" />
              <h1>ELLIN MMC</h1>
            </div>
            <p>Dövlət Məşğulluq Agentliyi tərəfindən</p>
            <p>dəstəklənən peşə hazırlıq mərkəzi</p>
            <div className='icon'>
              <button> <i className="fa-brands fa-facebook-f icc"></i> </button>
              <button> <i className="fa-brands fa-instagram icc"></i> </button>
              <button>  <i className="fa-brands fa-linkedin icc"></i> </button>
              <button> <i className="fa-brands fa-youtube icc"></i> </button>
            </div>
          </div>
        </div>

        <div className='Kurslar'>
          <h1>Kurslar</h1>
          <ul>
            <li>Proqramlaşdırma</li>
            <li>Qrafik Dizayn</li>
            <li>Biznes və İdarəetmə</li>
            <li>Xarici Dillər</li>
            <li>Texniki İxtisaslar</li>
          </ul>
        </div>

        <div className='Kecidler'>
          <h1>Keçidlər</h1>
          <ul>
            <li>Ana Səhifə</li>
            <li>Kurslar</li>
            <li>Müəllimlər</li>
            <li>Uğur Hekayələri</li>
            <li>Qeydiyyat</li>
          </ul>
        </div>

        <div className='Elaqe'>
          <h1>Əlaqə</h1>
          <div className='Biricc son'>
            <i className="fa-solid fa-location-dot"></i>
            <p>Bakı, Nəsimi rayonu, 28 may küçəsi</p>
          </div>
          <div className='Ikicc son'>
            <i className="fa-solid fa-phone"></i>
            <p>+994 XX XXX XX XX</p>
          </div>
          <div className='Ucicc son'>
            <i className="fa-regular fa-envelope"></i>
            <p>info@ellin.az</p>
          </div>
        </div>
      </div>
      <div className='enAlt'>
        <p>&copy; 2024 ELLIN MMC. Bütün hüquqlar qorunur.</p>
        <ul>
          <li>Məxfilik Siyasəti</li>
          <li>Şərtlər</li>
          <li>Kuki Siyasəti</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

