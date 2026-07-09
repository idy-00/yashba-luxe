import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Coffrets() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const cardRef = useRef(null)

  useGSAP(() => {
    gsap.from('.coffret-header > *', {
      y: 24, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })
    gsap.from('.coffret-main', {
      y: 40, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.coffret-main', start: 'top 85%' },
    })
  }, { scope: sectionRef })

  const onEnter = () => gsap.to(imgRef.current, { scale: 1.04, filter: 'brightness(0.5)', duration: 0.6, ease: 'power2.out' })
  const onLeave = () => gsap.to(imgRef.current, { scale: 1, filter: 'brightness(0.62)', duration: 0.6, ease: 'power2.out' })

  return (
    <section ref={sectionRef} id="coffrets" style={s.section}>
      <div className="coffret-header section-header">
        <span className="eyebrow" style={{ color: 'var(--or)' }}>Offrir le luxe</span>
        <h2 className="section-title" style={{ color: 'var(--noir)' }}>Coffrets Cadeaux</h2>
        <p style={s.priceMain}>À partir de 75 000 FCFA</p>
      </div>

      <div className="coffret-main" ref={cardRef} style={s.card} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div style={s.imgWrap}>
          <img ref={imgRef} src="/coffret-yashba.jpeg" alt="Coffret Yashba Luxe sur mesure" style={s.img} loading="lazy" />
        </div>
        <div style={s.info}>
          <p style={s.type}>Sur Mesure · Entièrement personnalisable</p>
          <h3 style={s.name}>Créez le coffret qui vous ressemble</h3>
          <div style={s.rule} />
          <p style={s.desc}>
            Offrez une expérience unique avec nos coffrets Yashba Luxe entièrement sur mesure. Choisissez vos parfums, huiles, brumes et fragrances d'intérieur pour composer un cadeau d'exception.
          </p>
          <div style={s.highlights}>
            {['Parfums au choix', 'Huiles de parfum', 'Brumes corporelles', 'Fragrances d\'intérieur'].map(item => (
              <span key={item} style={s.pill}>{item}</span>
            ))}
          </div>
          <p style={s.price}>À partir de 75 000 FCFA</p>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: { background: 'var(--creme)', color: 'var(--noir)', paddingBottom: 80 },
  priceMain: { fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--or)', marginTop: 6 },
  card: {
    background: '#0a0a0a',
    overflow: 'hidden',
    display: 'flex',
    maxWidth: 1100,
    margin: '0 auto',
    marginLeft: 48,
    marginRight: 48,
    cursor: 'default',
  },
  imgWrap: { flex: '0 0 52%', overflow: 'hidden', aspectRatio: 'auto' },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.62)', willChange: 'transform, filter' },
  info: { flex: 1, padding: '52px 48px', background: '#111', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  type: { fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--or)', marginBottom: 12 },
  name: { fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2vw, 32px)', fontWeight: 400, marginBottom: 0, color: '#fff', lineHeight: 1.3 },
  rule: { width: 40, height: 1, background: 'var(--or)', margin: '20px 0', opacity: 0.6 },
  desc: { fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', marginBottom: 24 },
  highlights: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 },
  pill: {
    fontSize: 11,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--or)',
    border: '1px solid rgba(201,168,76,0.35)',
    padding: '5px 12px',
  },
  price: { fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--or)' },
}
