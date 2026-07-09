import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function FeatureProduct({ imgSrc, imgAlt, eyebrow, name, desc, notes, price, imgLeft, light }) {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const slug = name.replace(/\s/g, '')

  useGSAP(() => {
    gsap.from(imgRef.current, {
      scale: 1.08, opacity: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
    })
    gsap.from('.feature-text-' + slug, {
      x: imgLeft ? 40 : -40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
    })
  }, { scope: sectionRef })

  const bg = light ? 'var(--creme)' : 'var(--noir)'
  const textColor = light ? 'var(--noir)' : '#fff'
  const bodyColor = light ? 'rgba(10,10,10,0.68)' : 'rgba(255,255,255,0.62)'
  const noteValColor = light ? 'rgba(10,10,10,0.65)' : 'rgba(255,255,255,0.65)'

  const imgEl = (
    <div className="feature-img" style={s.imgWrap}>
      <img ref={imgRef} src={imgSrc} alt={imgAlt} style={s.img} loading="lazy" />
    </div>
  )

  const textEl = (
    <div className={'feature-text feature-text-' + slug} style={{ ...s.textWrap, background: bg }} data-bg={bg}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title" style={{ color: textColor }}>{name}</h2>
      <div className="gold-rule" />
      <p style={{ ...s.desc, color: bodyColor }}>{desc}</p>
      <div className="feature-notes-grid" style={s.notesGrid}>
        {notes.map(n => (
          <div key={n.label} style={s.noteItem}>
            <p style={s.noteLabel}>{n.label}</p>
            <p style={{ ...s.noteVal, color: noteValColor }}>{n.value}</p>
          </div>
        ))}
      </div>
      <p style={s.price}>{price}</p>
    </div>
  )

  return (
    <div ref={sectionRef} className="layout-feature">
      {imgLeft ? <>{imgEl}{textEl}</> : <>{textEl}{imgEl}</>}
    </div>
  )
}

const s = {
  imgWrap: { overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', willChange: 'transform, opacity' },
  textWrap: { padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  desc: { fontSize: 15, lineHeight: 1.85, marginBottom: 24 },
  notesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, margin: '8px 0 24px' },
  noteItem: { textAlign: 'center' },
  noteLabel: { fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--or)', marginBottom: 6 },
  noteVal: { fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', whiteSpace: 'pre-line', lineHeight: 1.5 },
  price: { fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--or)', fontWeight: 400 },
}
