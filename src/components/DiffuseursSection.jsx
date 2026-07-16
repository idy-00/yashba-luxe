import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const diffuseurs = [
  {
    id: 'melon-royale',
    name: 'Melon Royale',
    img: '/diffuseur-melon-royale.jpeg',
    desc: 'Notre diffuseur à bâtonnets qui transforme votre intérieur en un cocon de douceur. La fraîcheur gourmande du melon mêlée à des notes élégantes pour une ambiance chaleureuse et luxueuse.',
    detail: 'Diffusion délicate pendant plusieurs semaines.',
    price: '10 000 FCFA',
  },
  {
    id: 'strawberry-oud',
    name: 'Strawberry Oud',
    img: '/diffuseur-strawberry-oud.jpeg',
    desc: 'La douceur gourmande de la fraise rencontre la noblesse du oud. Une alliance raffinée qui crée une ambiance élégante, chaleureuse et sophistiquée.',
    detail: 'Signature olfactive unique, diffusion continue.',
    price: '10 000 FCFA',
  },
]

export default function DiffuseursSection() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.diffuseurs-title-wrap > *', {
      y: 30, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    })
    gsap.from('.diff-card--left', {
      x: -60, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.diff-split', start: 'top 80%' },
    })
    gsap.from('.diff-card--right', {
      x: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.15,
      scrollTrigger: { trigger: '.diff-split', start: 'top 80%' },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="diffuseurs-section">
      <div className="diffuseurs-title-wrap section-header">
        <span className="eyebrow">Parfum d'intérieur</span>
        <h2 className="section-title diff-section-title">Diffuseurs à Bâtonnets</h2>
        <p className="diff-subtitle">10 000 FCFA · Diffusion longue durée · 100 ml</p>
      </div>

      <div className="diff-split">
        <div className="diff-card diff-card--left">
          <div className="diff-img-frame">
            <img src={diffuseurs[0].img} alt={diffuseurs[0].name} loading="lazy" />
          </div>
          <div className="diff-card-info">
            <span className="diff-tag">Diffuseur à bâtonnets</span>
            <h3 className="diff-name">{diffuseurs[0].name}</h3>
            <div className="diff-rule" />
            <p className="diff-desc">{diffuseurs[0].desc}</p>
            <p className="diff-detail">{diffuseurs[0].detail}</p>
            <p className="diff-volume">{diffuseurs[0].price}</p>
          </div>
        </div>

        <div className="diff-card diff-card--right">
          <div className="diff-img-frame">
            <img src={diffuseurs[1].img} alt={diffuseurs[1].name} loading="lazy" />
          </div>
          <div className="diff-card-info">
            <span className="diff-tag">Diffuseur à bâtonnets</span>
            <h3 className="diff-name">{diffuseurs[1].name}</h3>
            <div className="diff-rule" />
            <p className="diff-desc">{diffuseurs[1].desc}</p>
            <p className="diff-detail">{diffuseurs[1].detail}</p>
            <p className="diff-volume">{diffuseurs[1].price}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
