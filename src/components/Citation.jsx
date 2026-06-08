import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Citation() {
  const sectionRef = useRef(null)
  const boxRef = useRef(null)
  const textRef = useRef(null)

  useGSAP(() => {
    // bg parallax
    gsap.to('.citation-bg-inner', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // box + text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
      },
    })
    tl.from(boxRef.current, {
      opacity: 0,
      scale: 0.94,
      duration: 1,
      ease: 'power3.out',
    })
    .from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} style={s.section}>
      <div className="citation-bg-inner" style={s.bg} />
      <div style={s.overlay} />
      <div ref={boxRef} className="citation-box" style={s.box}>
        <p ref={textRef} style={s.text}>
          « Chaque flacon est une invitation à porter l'âme de l'Afrique — sa chaleur, ses saveurs, son élégance intemporelle. »
        </p>
        <p style={s.author}>— Yashba Luxe, Dakar</p>
      </div>
    </section>
  )
}

const s = {
  section: {
    position: 'relative',
    minHeight: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
    inset: '-20%',
    backgroundImage: 'url("/WhatsApp Image 2026-06-05 at 10.45.26 PM (1).jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    filter: 'brightness(0.28)',
    willChange: 'transform',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(10,10,10,0.45)',
  },
  box: {
    position: 'relative',
    maxWidth: 740,
    padding: '52px 56px',
    border: '1px solid rgba(201,168,76,0.35)',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(22px, 3.5vw, 38px)',
    fontWeight: 300,
    fontStyle: 'italic',
    lineHeight: 1.55,
    color: '#fff',
    marginBottom: 24,
  },
  author: {
    fontSize: 10,
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: 'var(--or)',
  },
}
