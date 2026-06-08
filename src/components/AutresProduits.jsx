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

const IconHuile = () => (
  <svg viewBox="0 0 60 110" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="110">
    <rect x="26" y="6" width="8" height="18" rx="1.5" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
    <rect x="22" y="22" width="16" height="5" rx="1" fill="#C9A84C" opacity="0.4"/>
    <rect x="12" y="27" width="36" height="74" rx="5" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
    <text x="30" y="74" fontFamily="Georgia,serif" fontSize="10" fontWeight="600" fill="#C9A84C" textAnchor="middle" letterSpacing="1">YL</text>
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
    name: 'Huiles Parfumées',
    tag: 'Soin & Parfum',
    desc: 'La fragrance à l\'état pur. Application directe ou diffuseur.',
    price: '2 000 – 9 000 FCFA',
    Icon: IconHuile,
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
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="autres" style={s.section}>
      <div className="autres-header section-header">
        <span className="eyebrow">Art de vivre</span>
        <h2 className="section-title" style={{ color: '#fff' }}>Bougies & Accessoires</h2>
      </div>

      <div className="grid-cards-4" style={s.grid}>
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
  iconWrap: {
    marginBottom: 36,
    opacity: 0.85,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
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
  rule: {
    width: 32,
    height: 1,
    background: 'var(--or)',
    margin: '16px auto',
    opacity: 0.6,
  },
  desc: {
    fontSize: 13,
    lineHeight: 1.75,
    color: 'rgba(255,255,255,0.45)',
    marginBottom: 20,
  },
  price: {
    fontFamily: 'var(--serif)',
    fontSize: 18,
    color: 'var(--or)',
    fontWeight: 400,
  },
}
