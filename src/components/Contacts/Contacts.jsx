import React from 'react'

import "./Contacts.css";



function Contacts() {
  return (
    <div className="contacts">
      <main>
        
   <div className="contacts-content">
    <h1>Bizimlə Əlaqə</h1>
    <p>Suallarınız varsa, bizimlə əlaqə saxlayın</p>
    </div>    
    <div className="contacts-main">
      <div className="contacts-sec1">
       <div className="items">
         <div className="icons"><i className="fa-sharp fa-light fa-location-dot "></i></div>
        <div className="txt" >
          <h3>Ünvan</h3>
        <p>Bakı şəhəri, Nəsimi rayonu</p>
        <p>28 May küçəsi</p>
        </div>

       </div>
         <div className="items">
           <div className="icons"><i className="fa-regular fa-phone"></i></div>
       <div className="txt">
         <h3>Telefon</h3>
        <p>+994 XX XXX XX XX</p>
          <p>+994 XX XXX XX XX</p>
       </div>
         </div>

        <div className="items">
            <div className="icons"><i className="fa-light fa-envelope"></i></div>
        <div className="txt">
          <h3>Email</h3>
        <p>info@ellin.az</p>
        <p>support@ellin.az</p>
        </div>
        </div>

        <div className="items">
            <div className="icons"><i className="fa-regular fa-clock"></i></div>
       <div className="txt">
         <h3>İş Saatları</h3>
        <p>Bazar ertəsi - Cümə: 09:00 - 18:00
          
        </p>
        <p>Şənbə: 10:00 - 15:00</p>
       </div>
        </div>

      </div>
       <div className="contacts-sec2">
        <form>
          
         <div className="form-header">
           <h3>Mesaj Göndərin</h3>
         </div>

          <label>Ad Soyad</label>
          <input type="text" placeholder="Adınızı daxil edin" />

          <label>Email</label>
          <input type="email" placeholder="email@example.com" />

          <label>Telefon</label>
          <input type="text" placeholder="+994 XX XXX XX XX" />

          <label>Mesaj</label>
          <textarea placeholder="Mesajınızı yazın..." />

          <button type="submit">Göndər</button>
        </form>
        </div>
    </div>
  
      </main>
    </div>
  );
}

export default Contacts;
