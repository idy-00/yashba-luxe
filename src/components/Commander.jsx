import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const steps = [
  { num: '01', title: 'Choisissez', desc: 'Parcourez notre collection et sélectionnez la fragrance qui vous correspond. Notez le nom et la quantité souhaitée.' },
  { num: '02', title: 'Contactez-nous', desc: 'Envoyez-nous un message sur WhatsApp ou Instagram. Nous vous répondons rapidement pour confirmer la commande.' },
  { num: '03', title: 'Recevez', desc: 'Livraison à domicile à Dakar ou retrait à Sacré-Cœur 3. Commande emballée avec soin dans notre packaging signature.' },
]

export default function Commander() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.cmd-header > *', {
      y: 24, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
    gsap.from('.cmd-step', {
      y: 36, opacity: 0, stagger: 0.14, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.cmd-steps', start: 'top 82%' },
    })
    gsap.from('.cmd-btns', {
      y: 20, opacity: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.cmd-btns', start: 'top 88%' },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="commander" className="cmd-section" style={s.section}>
      <div className="cmd-header" style={s.header}>
        <span className="eyebrow">Simple & rapide</span>
        <h2 className="section-title" style={{ color: '#fff', textAlign: 'center' }}>Commander est simple</h2>
      </div>
      <div className="cmd-steps grid-cmd">
        {steps.map(st => (
          <div key={st.num} className="cmd-step" style={s.step}>
            <p style={s.num}>{st.num}</p>
            <h3 style={s.title}>{st.title}</h3>
            <p style={s.desc}>{st.desc}</p>
          </div>
        ))}
      </div>
      <div className="cmd-btns" style={s.btns}>
        <a href="https://wa.me/221776558929" target="_blank" rel="noreferrer" style={s.wa}>
          <WaIcon />
          WhatsApp · 77 655 89 20
        </a>
        <a href="https://wa.me/221774291571" target="_blank" rel="noreferrer" style={s.wa}>
          <WaIcon />
          WhatsApp · 77 429 15 71
        </a>
        <a href="https://www.instagram.com/yashba_luxe_/" target="_blank" rel="noreferrer" style={s.insta}>
          <InstaIcon />
          Suivre sur Instagram
        </a>
      </div>
    </section>
  )
}

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const s = {
  section: { background: 'var(--noir)', padding: '100px 48px', textAlign: 'center' },
  header: { marginBottom: 60 },
  step: {},
  num: { fontFamily: 'var(--serif)', fontSize: 52, color: 'rgba(201,168,76,0.18)', fontWeight: 300, lineHeight: 1, marginBottom: 14 },
  title: { fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 400, marginBottom: 10, color: '#fff' },
  desc: { fontSize: 13, color: 'rgba(255,255,255,0.48)', lineHeight: 1.75 },
  btns: { display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' },
  wa: {
    display: 'inline-flex', alignItems: 'center', gap: 12,
    padding: '18px 48px', background: '#25D366', color: '#fff',
    textDecoration: 'none', fontSize: 11, letterSpacing: '2px',
    textTransform: 'uppercase', fontFamily: 'var(--sans)',
  },
  insta: {
    display: 'inline-flex', alignItems: 'center', gap: 12,
    padding: '18px 48px', border: '1px solid var(--or)', color: 'var(--or)',
    textDecoration: 'none', fontSize: 11, letterSpacing: '2px',
    textTransform: 'uppercase', fontFamily: 'var(--sans)',
  },
}
