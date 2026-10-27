import React from 'react';
// bunu muəllim araşdırıb tapdım react içində paketlərdən fontawsame olmadan icon yükləmək
import { LuAward, LuArrowRight } from 'react-icons/lu';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <LuAward className="hero-badge-icon" />
          <span className="hero-badge-text">
            Dövlət Məşğulluq Agentliyi tərəfindən dəstəklənir
          </span>
        </div>

        <h1 className="hero-title">
          Peşəkar Gələcəyinizə<br />
          İnvestisiya Edin
        </h1>

        <p className="hero-description">
          ELLIN MMC - Azərbaycanda müasir peşə hazırlıq və kurs proqramları ilə<br />
          karyeranızı inkişaf etdirin
        </p>

        <div className="hero-actions">
          <button className="hero-btn hero-btn-primary">
            <span>Kurslara baxın</span>
            <LuArrowRight className="hero-arrow-icon" />
          </button>

          <button className="hero-btn hero-btn-secondary">
            Daxil ol
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
