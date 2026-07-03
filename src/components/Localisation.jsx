import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const MAPS_URL = 'https://www.google.com/maps/place/Ahmadiya+Store/@14.7222615,-17.469225,3a,75y,208.93h,116.04t/data=!3m7!1e1!3m5!1sq0L_UgvrqpqFmpnZfuO-lQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-26.041019905363044%26panoid%3Dq0L_UgvrqpqFmpnZfuO-lQ%26yaw%3D208.93256467313245!7i16384!8i8192!4m6!3m5!1s0xec172adde4757a9:0x49feaec273e9e4be!8m2!3d14.7224173!4d-17.4692581!16s%2Fg%2F11lnp151f4'
const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=14.7224173,-17.4692581'
const EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.3!2d-17.4692581!3d14.7224173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172adde4757a9%3A0x49feaec273e9e4be!2sAhmadiya+Store!5e0!3m2!1sfr!2ssn!4v1'

export default function Localisation() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.loc-header > *', {
      y: 24, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })
    gsap.from('.loc-map', {
      opacity: 0, y: 30, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.loc-map', start: 'top 85%' },
    })
    gsap.from('.loc-info > *', {
      x: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.loc-info', start: 'top 85%' },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} style={s.section}>
      <div className="loc-header section-header">
        <span className="eyebrow">Nous trouver</span>
        <h2 className="section-title" style={{ color: 'var(--noir)' }}>Notre Boutique</h2>
      </div>

      <div className="loc-wrapper">
        <div className="loc-map">
          <iframe
            title="Yashba Luxe — Localisation"
            src={EMBED_URL}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div style={s.mapBorder} />
        </div>

        <div className="loc-info" style={s.info}>
          <div style={s.infoBlock}>
            <span className="eyebrow" style={{ color: 'var(--or)' }}>Adresse</span>
            <p style={s.address}>
              Sacré-Cœur 3<br />
              Derrière Pharmacie VDN<br />
              Dakar, Sénégal
            </p>
          </div>

          <div style={s.infoBlock}>
            <span className="eyebrow" style={{ color: 'var(--or)' }}>Contact</span>
            <a href="tel:+221776558920" style={s.tel}>+221 77 655 89 20</a>
            <a href="tel:+221774291571" style={s.tel}>+221 77 429 15 71</a>
          </div>

          <div style={s.infoBlock}>
            <span className="eyebrow" style={{ color: 'var(--or)' }}>Horaires</span>
            <p style={s.hours}>
              Lun – Sam · 09h00 – 20h00<br />
              Dimanche · Sur rendez-vous
            </p>
          </div>

          <div style={s.btns}>
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" style={s.btnPrimary}>
              <PinIcon />
              Obtenir l'itinéraire
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" style={s.btnOutline}>
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

const s = {
  section: {
    background: 'var(--creme)',
    color: 'var(--noir)',
    paddingBottom: 80,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 420px',
    gap: 0,
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 48px',
  },
  mapWrap: {
    position: 'relative',
    aspectRatio: '4/3',
    overflow: 'hidden',
    filter: 'grayscale(0.3) contrast(1.05)',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  },
  mapBorder: {
    position: 'absolute',
    inset: 0,
    border: '1px solid rgba(201,168,76,0.3)',
    pointerEvents: 'none',
  },
  info: {
    background: 'var(--noir)',
    padding: '56px 48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 32,
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  address: {
    fontSize: 15,
    lineHeight: 1.9,
    color: 'rgba(255,255,255,0.65)',
  },
  tel: {
    fontSize: 15,
    color: 'var(--or)',
    textDecoration: 'none',
  },
  hours: {
    fontSize: 14,
    lineHeight: 1.85,
    color: 'rgba(255,255,255,0.55)',
  },
  btns: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 8,
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 28px',
    background: 'var(--or)',
    color: 'var(--noir)',
    textDecoration: 'none',
    fontSize: 10,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    fontFamily: 'var(--sans)',
    fontWeight: 500,
    transition: 'opacity 0.25s',
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    border: '1px solid rgba(201,168,76,0.4)',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: 10,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    fontFamily: 'var(--sans)',
    transition: 'border-color 0.25s, color 0.25s',
  },
}
