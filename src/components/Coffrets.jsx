import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const coffrets = [
  {
    name: 'Coffret Premium',
    type: 'Ligne exclusive',
    desc: 'Personnalisable selon votre budget. Présentation luxueuse noir et or, sélection de fragrances signature Yashba Luxe sur mesure. Le cadeau parfait pour les occasions importantes.',
    price: 'À partir de 50 000 FCFA',
    img: '/WhatsApp Image 2026-06-05 at 10.45.17 PM.jpeg',
  },
  {
    name: 'Collection Gift',
    type: 'Sur Mesure',
    desc: 'Sélection sur mesure avec emballage festif. Nos conseillers composent le coffret idéal selon vos préférences — une expérience olfactive complète présentée avec raffinement.',
    price: 'À partir de 50 000 FCFA',
    img: '/WhatsApp Image 2026-06-05 at 10.45.15 PM (1).jpeg',
  },
]

export default function Coffrets() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.coffret-header > *', {
      y: 24, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })
    ScrollTrigger.batch('.coffret-item', {
      onEnter: (els) => gsap.from(els, { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }),
      start: 'top 88%', once: true,
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="coffrets" style={s.section}>
      <div className="coffret-header section-header">
        <span className="eyebrow" style={{ color: 'var(--or)' }}>Offrir le luxe</span>
        <h2 className="section-title" style={{ color: 'var(--noir)' }}>Coffrets Cadeaux</h2>
        <p style={s.priceMain}>À partir de 50 000 FCFA</p>
      </div>
      <div className="grid-coffret">
        {coffrets.map(c => <CoffretCard key={c.name} coffret={c} />)}
      </div>
    </section>
  )
}

function CoffretCard({ coffret }) {
  const cardRef = useRef(null)
  const imgRef = useRef(null)

  const onEnter = () => gsap.to(imgRef.current, { scale: 1.05, filter: 'brightness(0.45)', duration: 0.6, ease: 'power2.out' })
  const onLeave = () => gsap.to(imgRef.current, { scale: 1, filter: 'brightness(0.58)', duration: 0.6, ease: 'power2.out' })

  return (
    <div className="coffret-item" ref={cardRef} style={s.card} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div style={s.imgWrap}>
        <img ref={imgRef} src={coffret.img} alt={coffret.name} style={s.img} loading="lazy" />
      </div>
      <div style={s.info}>
        <p style={s.type}>{coffret.type}</p>
        <h3 style={s.name}>{coffret.name}</h3>
        <p style={s.desc}>{coffret.desc}</p>
        <p style={s.price}>{coffret.price}</p>
      </div>
    </div>
  )
}

const s = {
  section: { background: 'var(--creme)', color: 'var(--noir)', paddingBottom: 80 },
  priceMain: { fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--or)', marginTop: 6 },
  card: { background: '#0a0a0a', overflow: 'hidden' },
  imgWrap: { aspectRatio: '16/9', overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.58)', willChange: 'transform, filter' },
  info: { padding: '26px 28px 32px', background: '#111' },
  type: { fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--or)', marginBottom: 8 },
  name: { fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, marginBottom: 10, color: '#fff' },
  desc: { fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', marginBottom: 14 },
  price: { fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--or)' },
}
