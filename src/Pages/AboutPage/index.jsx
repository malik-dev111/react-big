import Nav from "../../Components/Nav"

import React from "react";
import './style.scss'
const About = () => {
  return (
    <div>
      <Nav/>
      <h1>MacBook Hakkında</h1>
      <p>
        MacBook, Apple tarafından üretilen bir dizüstü bilgisayar serisidir. İlk
        olarak 2006 yılında piyasaya sürülmüştür ve günümüzde birçok farklı
        modeli bulunmaktadır.
      </p>
      <ul>
        <li>MacBook Air</li>
        <li>MacBook Pro</li>
        <li>MacBook</li>
      </ul>
      <p>
        Her bir MacBook modeli farklı özelliklere sahiptir ve farklı kullanım
        senaryoları için tasarlanmıştır. Örneğin, MacBook Air hafif ve taşınabilir
        bir tasarıma sahiptir, MacBook Pro ise daha güçlü bir donanım ve daha
        yüksek performans sunar.
      </p>
    </div>
  );
};

export default About;
