import React from 'react'
import './info.css'
import { TargetIcon, EyeIcon, AwardIcon, UsersIcon } from './Icons'

// Təkrarlanan məlumatları massivdə saxlayırıq, aşağıda map() ilə ekrana çıxarırıq
const reasons = [
  'Müasir tədris metodları və avadanlıqlar',
  'Təcrübəli və peşəkar müəllimlər heyəti',
  'Dövlət sertifikatı və beynəlxalq tanınma',
  'İş yerləşdirmə dəstəyi və karyera məsləhətləri',
  'Çevik qrafik və onlayn/offline tədris imkanları',
]

const stats = [
  { id: 1, icon: <AwardIcon />, number: '15+', label: 'İllik Təcrübə' },
  { id: 2, icon: <UsersIcon />, number: '100+', label: 'Müəllim' },
  { id: 3, icon: <TargetIcon />, number: '50+', label: 'İxtisas' },
  { id: 4, icon: <EyeIcon />, number: '10+', label: 'Filial' },
]

const Info = () => {
  return (
    <section className="container">

      {/* 1) Başlıq hissəsi */}
      <div className="info-text">
        <h1>Haqqımızda</h1>
        <p>ELLIN MMC olaraq, Azərbaycanda peşə təhsili sahəsində lider mövqedəyik</p>
      </div>

      {/* 2) Orta hissə: solda missiya/vizyon, sağda "Niyə ELLIN?" kartı */}
      <div className="info-middle">
        <div className="info-left">
          <div className="info-item">
            <div className="icon-box"><TargetIcon /></div>
            <div>
              <h3>Missiyamız</h3>
              <p>
                Dövlət Məşğulluq Agentliyi ilə əməkdaşlıq edərək, vətəndaşlarımıza
                keyfiyyətli peşə təhsili və praktiki bacarıqlar qazandırmaq
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box"><EyeIcon /></div>
            <div>
              <h3>Vizyonumuz</h3>
              <p>
                Azərbaycanda ən yaxşı peşə hazırlıq mərkəzi olmaq və
                tələbələrimizin uğurlu karyera qurmalarına kömək etmək
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Niyə ELLIN?</h3>
          <ul>
            {reasons.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3) Statistika kartları */}
      <div className="info-end">
        {stats.map((item) => (
          <div className="stat-card" key={item.id}>
            <span className="stat-icon">{item.icon}</span>
            <strong>{item.number}</strong>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Info
