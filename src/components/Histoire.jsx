import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Histoire() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useGSAP(() => {
    gsap.to(imgRef.current, {
      yPercent: -8, ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom', end: 'bottom top', scrub: true,
      },
    })
    gsap.from('.histoire-text > *', {
      x: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    })
    gsap.from('.histoire-img-wrap', {
      x: -40, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="histoire" className="layout-histoire">
      <div className="histoire-img-wrap" style={s.imgWrap}>
        <img
          ref={imgRef}
          src="/WhatsApp Image 2026-06-05 at 10.45.17 PM.jpeg"
          alt="Yash Kalina"
          style={s.img}
          loading="lazy"
        />
        <div style={s.imgBorder} />
      </div>

      <div className="histoire-text" style={s.text}>
        <span className="eyebrow">Notre histoire</span>
        <h2 className="section-title">Une Passion Née<br />de l'Enfance</h2>
        <div className="gold-rule" />
        <p style={s.body}>
          Passionnée de senteurs depuis toute petite, j'ai toujours aimé sentir différente. Je ne me limitais pas à un seul parfum, mais je mélangeais toutes les fragrances de ma mère jusqu'à obtenir une identité olfactive unique. Cette quête d'unicité et de créativité est devenue l'essence même de Yashba Luxe.
        </p>

        <h3 style={s.subTitle}>Notre Mission</h3>
        <p style={s.body}>
          Offrir des fragrances d'exception qui révèlent votre personnalité unique, avec des parfums de luxe qui tiennent toute la journée et créent des souvenirs inoubliables.
        </p>

        <h3 style={s.subTitle}>Ce Qui Nous Rend Unique</h3>
        <p style={s.body}>
          Chez Yashba Luxe, nous nous distinguons par notre expertise dans la sélection de sillages exceptionnels qui tiennent longtemps. Chaque fragrance est soigneusement choisie pour sa qualité, sa longévité et sa capacité à raconter une histoire unique. Nous ne vendons pas simplement des parfums, nous offrons des identités olfactives qui marquent les esprits et créent des souvenirs impérissables.
        </p>

        <h3 style={s.subTitle}>Notre Succès</h3>
        <p style={s.body}>
          Créée le 20 septembre 2025, Yashba Luxe a su conquérir le cœur de ses clients en seulement trois mois. Notre engagement envers l'excellence, l'authenticité et le service personnalisé nous a permis de bâtir une clientèle fidèle qui revient pour vivre l'expérience unique que nous offrons.
        </p>
      </div>
    </section>
  )
}

const s = {
  imgWrap: { position: 'relative', overflow: 'hidden', aspectRatio: '4/5' },
  img: { width: '100%', height: '110%', objectFit: 'cover', objectPosition: 'center top', display: 'block' },
  imgBorder: { position: 'absolute', inset: 0, border: '1px solid rgba(201,168,76,0.4)', pointerEvents: 'none' },
  text: {},
  body: { fontSize: 15, lineHeight: 1.85, color: 'rgba(10,10,10,0.68)' },
  subTitle: {
    fontFamily: 'var(--serif)',
    fontSize: 18,
    fontWeight: 400,
    color: 'var(--noir)',
    marginTop: 28,
    marginBottom: 10,
  },
  quote: {
    marginTop: 28, fontFamily: 'var(--serif)', fontStyle: 'italic',
    fontSize: 14, color: 'rgba(10,10,10,0.45)', letterSpacing: '0.5px',
  },
}
