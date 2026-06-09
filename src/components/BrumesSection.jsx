import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { brumes } from '../data/products'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function BrumesSection() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.brume-header > *', {
      y: 28, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })
    ScrollTrigger.batch('.brume-card', {
      onEnter: (els) => gsap.from(els, { y: 36, opacity: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out' }),
      start: 'top 88%', once: true,
    })
  }, { scope: sectionRef })

  const homeFragrances = brumes.filter(b => b.type.includes('Home'))
  const bodyMists = brumes.filter(b => b.type.includes('Body'))

  return (
    <section ref={sectionRef} id="brumes" style={s.section}>
      <div className="brume-header section-header">
        <span className="eyebrow" style={{ color: 'var(--or)' }}>Home & Corps</span>
        <h2 className="section-title" style={{ color: 'var(--noir)' }}>Brumes & Ambiances</h2>
      </div>

      <div style={s.subheader}>
        <p style={s.subCat}>Home Fragrances</p>
        <p style={s.subPrice}>10 000 FCFA · Sprays d'ambiance 200ml · Design élégant noir et or</p>
      </div>
      <div className="grid-brume-home">
        {homeFragrances.map(b => <BrumeCard key={b.id} brume={b} />)}
      </div>

      <div style={s.subheader}>
        <p style={s.subCat}>Brumes Corporelles</p>
        <p style={s.subPrice}>8 000 FCFA · Made in Dubai UAE</p>
      </div>
      <div className="grid-brume-body">
        {bodyMists.map(b => <BrumeCard key={b.id} brume={b} />)}
      </div>
    </section>
  )
}

function BrumeCard({ brume }) {
  const cardRef = useRef(null)
  const imgRef = useRef(null)

  const onEnter = () => {
    gsap.to(imgRef.current, { scale: 1.05, duration: 0.55, ease: 'power2.out' })
    gsap.to(cardRef.current, { boxShadow: '0 12px 40px rgba(201,168,76,0.15)', duration: 0.3 })
  }
  const onLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.55, ease: 'power2.out' })
    gsap.to(cardRef.current, { boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.3 })
  }

  return (
    <div className="brume-card" ref={cardRef} style={s.card} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div style={s.imgWrap}>
        <img ref={imgRef} src={brume.img} alt={brume.name} style={s.img} loading="lazy" />
      </div>
      <div style={s.info}>
        <p style={s.type}>{brume.type}</p>
        <h3 style={s.name}>{brume.name}</h3>
        <p style={s.desc}>{brume.desc}</p>
        <p style={s.notes}>{brume.notes}</p>
        <p style={s.price}>{brume.price}</p>
      </div>
    </div>
  )
}

const s = {
  section: { background: 'var(--creme)', color: 'var(--noir)', paddingBottom: 80 },
  subheader: { textAlign: 'center', padding: '0 48px 16px' },
  subCat: { fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--or)', marginBottom: 4 },
  subPrice: { fontFamily: 'var(--serif)', fontSize: 16, color: 'rgba(10,10,10,0.55)' },
  card: { background: '#fff', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.18)', transition: 'box-shadow 0.3s' },
  imgWrap: { aspectRatio: '3/4', overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', willChange: 'transform' },
  info: { padding: 24, color: 'var(--noir)' },
  type: { fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--or)', marginBottom: 8 },
  name: { fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, marginBottom: 10, color: 'var(--noir)' },
  desc: { fontSize: 13, lineHeight: 1.75, color: 'rgba(10,10,10,0.58)', marginBottom: 10 },
  notes: { fontSize: 11, color: 'var(--or)', lineHeight: 1.6, marginBottom: 12 },
  price: { fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--or)', fontWeight: 400 },
}
