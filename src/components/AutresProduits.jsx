import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const IconBougie = () => (
  <svg viewBox="0 0 60 110" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="110">
    <ellipse cx="30" cy="14" rx="6" ry="10" fill="#C9A84C" opacity="0.8"/>
    <ellipse cx="30" cy="17" rx="3" ry="5" fill="#e8c96a"/>
    <line x1="30" y1="24" x2="30" y2="32" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
    <rect x="14" y="32" width="32" height="70" rx="3" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
    <text x="30" y="76" fontFamily="Georgia,serif" fontSize="10" fontWeight="600" fill="#C9A84C" textAnchor="middle" letterSpacing="1">YL</text>
  </svg>
)

const IconBruleParfum = () => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="100">
    <path d="M28 44 Q30 32 30 22 Q30 14 28 8" stroke="#C9A84C" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7"/>
    <path d="M52 44 Q50 32 50 22 Q50 14 52 8" stroke="#C9A84C" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7"/>
    <path d="M40 42 Q41 28 40 18 Q39 10 40 6" stroke="#C9A84C" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
    <path d="M14 60 Q20 44 40 44 Q60 44 66 60 L62 92 Q60 96 40 96 Q20 96 18 92 Z" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
    <text x="40" y="78" fontFamily="Georgia,serif" fontSize="10" fontWeight="600" fill="#C9A84C" textAnchor="middle" letterSpacing="1">YL</text>
  </svg>
)

const IconEncens = () => (
  <svg viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="110">
    <path d="M32 42 Q34 30 32 20 Q30 12 34 6" stroke="#C9A84C" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.6"/>
    <path d="M48 42 Q46 28 48 18 Q50 10 46 6" stroke="#C9A84C" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.6"/>
    <path d="M16 64 Q20 42 40 40 Q60 42 64 64 L60 100 Q58 104 40 104 Q22 104 20 100 Z" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
    <text x="40" y="82" fontFamily="Georgia,serif" fontSize="11" fontWeight="600" fill="#C9A84C" textAnchor="middle" letterSpacing="1">YL</text>
  </svg>
)

const items = [
  {
    name: 'Bougies Parfumées',
    tag: 'Art de vivre',
    desc: 'Collection Tricolore — Rouge, Orange, Gris. Couvercles noir et or.',
    price: '5 000 FCFA',
    Icon: IconBougie,
  },
  {
    name: 'Brûle-Parfums',
    tag: 'Décoration',
    desc: 'Design élégant avec découpes dorées finement travaillées.',
    price: '5 000 FCFA',
    Icon: IconBruleParfum,
  },
  {
    name: 'Pots d\'Encens',
    tag: 'Rituel olfactif',
    desc: 'Ornés du logo YL doré. Luxe africain pour votre quotidien.',
    price: '8 000 FCFA',
    Icon: IconEncens,
  },
]

export default function AutresProduits() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.autres-header > *', {
      y: 24, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })
    ScrollTrigger.batch('.autre-card', {
      onEnter: els => gsap.from(els, { y: 32, opacity: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out' }),
      start: 'top 88%', once: true,
    })
    gsap.from('.huiles-block', {
      y: 32, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.huiles-block', start: 'top 85%' },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="autres" style={s.section}>
      <div className="autres-header section-header">
        <span className="eyebrow">Art de vivre</span>
        <h2 className="section-title" style={{ color: '#fff' }}>Bougies & Accessoires</h2>
      </div>

      <div className="grid-cards-3" style={s.grid}>
        {items.map(item => (
          <div key={item.name} className="autre-card" style={s.card}>
            <div style={s.iconWrap}>
              <item.Icon />
            </div>
            <div style={s.info}>
              <span style={s.tag}>{item.tag}</span>
              <h3 style={s.name}>{item.name}</h3>
              <div style={s.rule} />
              <p style={s.desc}>{item.desc}</p>
              <p style={s.price}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="huiles-block" style={s.huilesWrap}>
        <div style={s.huilesImg}>
          <img src="/huiles-parfum.jpeg" alt="Huiles de Parfum Yashba Luxe" style={s.huilesPhoto} loading="lazy" />
        </div>
        <div style={s.huilesContent}>
          <span style={s.tag}>Soin & Parfum</span>
          <h3 style={s.huilesTitle}>Huiles de Parfum</h3>
          <div style={s.rule} />
          <p style={s.huilesDesc}>La fragrance à l'état pur. Trois essences exclusives à appliquer directement sur la peau ou en diffuseur pour un sillage intense et durable.</p>
          <div style={s.huilesGrid}>
            {[
              { name: 'Musc Vanillé', desc: 'Douceur et sensualité. L\'alliance parfaite du musc et de la vanille.' },
              { name: 'Oud Rouge', desc: 'Intensité et élégance. Un oud profond sublimé par des notes chaudes et épicées.' },
              { name: 'Musc Blanc', desc: 'Pureté et raffinement. Un musc délicat aux notes propres et enveloppantes.' },
            ].map(h => (
              <div key={h.name} style={s.huilesItem}>
                <p style={s.huilesName}>{h.name}</p>
                <p style={s.huilesItemDesc}>{h.desc}</p>
              </div>
            ))}
          </div>
          <p style={s.price}>2 000 – 9 000 FCFA</p>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: { background: 'var(--noir)', paddingBottom: 80 },
  grid: { gap: 1 },
  card: {
    background: '#111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '52px 32px 40px',
    borderTop: '1px solid rgba(201,168,76,0.12)',
    textAlign: 'center',
  },
  iconWrap: { marginBottom: 36, opacity: 0.85 },
  info: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  tag: {
    fontSize: 10,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'var(--or)',
    fontFamily: 'var(--sans)',
    marginBottom: 12,
    display: 'block',
  },
  name: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(18px, 1.5vw, 24px)',
    fontWeight: 400,
    color: '#fff',
    lineHeight: 1.2,
    marginBottom: 0,
  },
  rule: { width: 32, height: 1, background: 'var(--or)', margin: '16px auto', opacity: 0.6 },
  desc: { fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', marginBottom: 20 },
  price: { fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--or)', fontWeight: 400 },
  huilesWrap: {
    display: 'flex',
    marginTop: 2,
    background: '#111',
    borderTop: '1px solid rgba(201,168,76,0.12)',
  },
  huilesImg: { flex: '0 0 45%', overflow: 'hidden', minHeight: 400 },
  huilesPhoto: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  huilesContent: {
    flex: 1,
    padding: '60px 56px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  huilesTitle: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(24px, 2vw, 36px)',
    fontWeight: 400,
    color: '#fff',
    lineHeight: 1.2,
    marginBottom: 0,
  },
  huilesDesc: { fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: 28 },
  huilesGrid: { display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 },
  huilesItem: { borderLeft: '2px solid rgba(201,168,76,0.4)', paddingLeft: 16 },
  huilesName: { fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--or)', marginBottom: 4 },
  huilesItemDesc: { fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' },
}
