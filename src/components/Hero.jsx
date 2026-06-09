import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Hero() {
  const heroRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollLineRef = useRef(null)

  useGSAP(() => {
    // Parallax on bg
    gsap.to(bgRef.current, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Content entrance stagger
    const tl = gsap.timeline({ delay: 0.6 })
    tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from(titleRef.current, { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
      .from(subRef.current, { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from(ctaRef.current, { y: 16, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .from(scrollLineRef.current, { opacity: 0, duration: 0.6 }, '-=0.2')

    // Scroll fade out content
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'center top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: heroRef })

  return (
    <section id="hero" ref={heroRef} style={s.hero}>
      <div ref={bgRef} style={s.bg} />
      <div style={s.overlay} />

      <div ref={contentRef} style={s.content}>
        <span className="hero-eyebrow" style={s.eyebrow}>Collection Premium 2025</span>
        <h1 ref={titleRef} style={s.title}>Yashba Luxe</h1>
        <p ref={subRef} style={s.sub}>« Là où chaque fragrance raconte une histoire »</p>
        <a ref={ctaRef} href="#parfums-femme" className="btn-outline">Découvrir la collection</a>
      </div>

      <div ref={scrollLineRef} style={s.scrollHint}>
        <span style={s.scrollLabel}>Défiler</span>
        <div style={s.scrollLine} />
      </div>
    </section>
  )
}

const s = {
  hero: {
    position: 'relative',
    height: '100vh',
    minHeight: 700,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("/WhatsApp Image 2026-06-05 at 10.45.26 PM (2).jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
    filter: 'brightness(0.42)',
    willChange: 'transform',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.05) 40%, rgba(10,10,10,0.65) 100%)',
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    padding: '0 24px',
  },
  eyebrow: {
    fontSize: 10,
    letterSpacing: '5px',
    textTransform: 'uppercase',
    color: 'var(--or)',
    fontFamily: 'var(--sans)',
    fontWeight: 400,
    display: 'block',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(60px, 9vw, 110px)',
    fontWeight: 300,
    letterSpacing: '12px',
    textTransform: 'uppercase',
    lineHeight: 1,
    marginBottom: 16,
    color: 'var(--or)',
  },
  sub: {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(14px, 2vw, 20px)',
    fontWeight: 300,
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.72)',
    letterSpacing: '2px',
    marginBottom: 48,
  },
  scrollHint: {
    position: 'absolute',
    bottom: 36,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  scrollLabel: {
    fontSize: 9,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
  },
  scrollLine: {
    width: 1,
    height: 40,
    background: 'linear-gradient(to bottom, var(--or), transparent)',
    animation: 'scrollPulse 2s infinite',
  },
}
