import React from 'react'
import './Statistika.css'
import foto1 from '../../assets/images/div.w-16.png'
import foto2 from '../../assets/images/foto2.png'
import foto3 from '../../assets/images/foto3.png'
import foto4 from '../../assets/images/foto4.png'

const Statistika = () => {
    return (
        <section>
            <div className='esas'>
                <div className="bir">
                    <div className="ugur">
                        <h1>Uğur Göstəricilərimiz</h1>
                        <p>Rəqəmlərlə ELLIN MMC</p>
                    </div>
                </div>
                <div className="iki">
                    <div className="card1">
                        <div className="bosluq"></div>
                        <div className="foto">
                            <img src={foto1} alt='Foto' />
                        </div>
                        <div className="yazi">
                            <h1>12,000+</h1>
                            <p>Məzun Tələbə</p>
                            <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>+23% bu il</span>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="bosluq"></div>
                        <div className="foto">
                            <img src={foto2} alt='Foto' />
                        </div>
                        <div className="yazi">
                            <h1 className='mavi'>95%</h1>
                            <p>İş Yerləşməsi</p>
                            <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>+5% bu il</span>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="bosluq"></div>
                        <div className="foto">
                            <img src={foto3} alt='Foto' />
                        </div>
                        <div className="yazi">
                            <h1 className='narinc'>200+</h1>
                            <p>Tərəfdaş Şirkət</p>
                            <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>+18% bu il</span>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="bosluq"></div>
                        <div className="foto">
                            <img src={foto4} alt='Foto' />
                        </div>
                        <div className="yazi">
                            <h1 className='yasil'>4.9/5</h1>
                            <p>Tələbə Qiyməti</p>
                            <span>2,500+ rəy</span>
                        </div>
                    </div>
                </div>
                <div className="uc">
                    <div className="qutu">
                        <h1>100%</h1>
                        <p>Praktiki Təlim</p>
                    </div>
                    <div className="qutu">
                        <h1>24/7</h1>
                        <p>Online Dəstək</p>
                    </div>
                    <div className="qutu">
                        <h1>∞</h1>
                        <p>Karyera İmkanları</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Statistika