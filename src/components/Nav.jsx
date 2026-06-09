import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function Nav() {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return
      navRef.current.style.background = window.scrollY > 60
        ? 'rgba(10,10,10,0.97)'
        : 'transparent'
      navRef.current.style.borderBottom = window.scrollY > 60
        ? '1px solid rgba(201,168,76,0.18)'
        : '1px solid transparent'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2,
    })
  }, { scope: navRef })

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav ref={navRef} style={styles.nav}>
        <ul className="nav-links" style={styles.links}>
          <li><a href="#parfums-femme" style={styles.link}>Femme</a></li>
          <li><a href="#parfums-homme" style={styles.link}>Homme</a></li>
        </ul>

        <a href="#hero" style={styles.logo}>
          <span style={styles.logoYL}>YL</span>
          <span style={styles.logoSub}>Yashba Luxe</span>
        </a>

        <ul className="nav-links" style={styles.links}>
          <li><a href="#brumes" style={styles.link}>Brumes</a></li>
          <li><a href="#commander" style={styles.link}>Commander</a></li>
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        <button onClick={closeMenu} style={styles.closeBtn} aria-label="Fermer">✕</button>
        {['#parfums-femme:Femme','#parfums-homme:Homme','#brumes:Brumes','#autres:Accessoires','#coffrets:Coffrets','#commander:Commander'].map(item => {
          const [href, label] = item.split(':')
          return (
            <a key={label} href={href} style={styles.mobileLink} onClick={closeMenu}>{label}</a>
          )
        })}
        <a href="https://wa.me/221776558929" target="_blank" rel="noreferrer" style={styles.mobileCta}>
          Commander sur WhatsApp
        </a>
      </div>
    </>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    padding: '20px 48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'transparent',
    borderBottom: '1px solid transparent',
    transition: 'background 0.4s, border-color 0.4s',
  },
  links: { display: 'flex', gap: 36, listStyle: 'none' },
  link: {
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    fontFamily: 'var(--sans)',
    transition: 'color 0.3s',
  },
  logo: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textDecoration: 'none', lineHeight: 1, gap: 4,
  },
  logoYL: {
    fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700,
    letterSpacing: '4px', color: 'var(--or)',
    textShadow: '0 0 20px rgba(201,168,76,0.4)',
  },
  logoSub: {
    fontSize: 9, letterSpacing: '3px', color: 'rgba(255,255,255,0.4)',
    fontFamily: 'var(--sans)', fontWeight: 300, textTransform: 'uppercase',
  },
  closeBtn: {
    position: 'absolute', top: 24, right: 24,
    background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
    fontSize: 18, cursor: 'pointer', padding: 8,
  },
  mobileLink: {
    fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 300,
    letterSpacing: '4px', textTransform: 'uppercase',
    color: '#fff', textDecoration: 'none', transition: 'color 0.3s',
  },
  mobileCta: {
    marginTop: 16, padding: '14px 36px',
    border: '1px solid var(--or)', color: 'var(--or)',
    textDecoration: 'none', fontSize: 10, letterSpacing: '2.5px',
    textTransform: 'uppercase', fontFamily: 'var(--sans)',
  },
}
