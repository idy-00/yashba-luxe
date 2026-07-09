import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { brumes } from '../data/products'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function ParticleCanvas({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }
    resize()

    const rand = (a, b) => Math.random() * (b - a) + a
    const COUNT = 40

    function newParticle(init = false) {
      if (theme === 'gold') {
        return {
          x: rand(0, canvas.width),
          y: init ? rand(0, canvas.height) : rand(canvas.height * 0.6, canvas.height + 10),
          vx: rand(-0.25, 0.25),
          vy: rand(-0.5, -1.0),
          size: rand(1, 3),
          opacity: rand(0.5, 1),
          fade: rand(0.004, 0.009),
          star: Math.random() > 0.6,
          color: ['#C9A84C', '#e8c96a', '#f5e07a', '#fffacd'][Math.floor(rand(0, 4))],
        }
      } else {
        return {
          x: rand(0, canvas.width),
          y: init ? rand(-canvas.height, canvas.height) : rand(-20, -5),
          vx: rand(-0.4, 0.4),
          vy: rand(0.4, 0.9),
          rot: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.015, 0.015),
          w: rand(8, 16),
          h: rand(4, 8),
          opacity: rand(0.25, 0.55),
          fade: rand(0.002, 0.005),
          color: ['#c0392b', '#e8b4b8', '#d4607a', '#f9d0d8'][Math.floor(rand(0, 4))],
        }
      }
    }

    const particles = Array.from({ length: COUNT }, () => newParticle(true))

    function draw(p) {
      ctx.save()
      ctx.globalAlpha = p.opacity
      if (theme === 'gold') {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        if (p.star) {
          ctx.strokeStyle = p.color
          ctx.lineWidth = 0.6
          ctx.beginPath()
          ctx.moveTo(p.x - p.size * 2.5, p.y)
          ctx.lineTo(p.x + p.size * 2.5, p.y)
          ctx.moveTo(p.x, p.y - p.size * 2.5)
          ctx.lineTo(p.x, p.y + p.size * 2.5)
          ctx.stroke()
        }
      } else {
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.ellipse(0, 0, p.w / 2, p.h / 2, 0, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    function isDead(p) {
      if (theme === 'gold') return p.opacity <= 0 || p.y < -10
      return p.opacity <= 0 || p.y > canvas.height + 20
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.opacity -= p.fade
        if (theme === 'dark') p.rot += p.rotSpeed
        draw(p)
        if (isDead(p)) particles[i] = newParticle()
      }
      animId = requestAnimationFrame(animate)
    }

    animate()

    const observer = new ResizeObserver(resize)
    observer.observe(parent)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  )
}

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
    gsap.from('.sweet-block', {
      y: 36, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.sweet-block', start: 'top 85%' },
    })
  }, { scope: sectionRef })

  const homeFragrances = brumes.filter(b => b.type.includes('Home'))
  const sweetMists = brumes.filter(b => b.id === 'sweet-vanilla-mist' || b.id === 'sweet-candy')

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
      {homeFragrances.map((b, i) => (
        <HomeFragranceRow key={b.id} brume={b} index={i} />
      ))}

      <div style={s.subheader}>
        <p style={s.subCat}>Brumes Corporelles · 100ml</p>
        <p style={s.subPrice}>8 000 FCFA</p>
      </div>
      <div className="sweet-block" style={s.sweetWrap}>
        <div style={s.sweetImg}>
          <img src="/brumes-sweet.jpeg" alt="Sweet Vanilla & Sweet Candy — Body Mist Yashba Luxe" style={s.sweetPhoto} loading="lazy" />
        </div>
        <div style={s.sweetContent}>
          {sweetMists.map((b, i) => (
            <div key={b.id} style={{ ...s.sweetItem, borderTop: i > 0 ? '1px solid rgba(201,168,76,0.15)' : 'none' }}>
              <p style={s.type}>{b.type}</p>
              <h3 style={s.sweetName}>{b.name}</h3>
              <p style={s.sweetDesc}>{b.desc}</p>
              <p style={s.notes}>{b.notes}</p>
              <p style={s.price}>{b.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomeFragranceRow({ brume, index }) {
  const imgRef = useRef(null)
  const rowRef = useRef(null)
  const imgLeft = index % 2 === 0
  const theme = imgLeft ? 'gold' : 'dark'

  const onEnter = () => gsap.to(imgRef.current, { scale: 1.04, duration: 0.6, ease: 'power2.out' })
  const onLeave = () => gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: 'power2.out' })

  return (
    <div
      ref={rowRef}
      className="brume-card"
      style={{ ...s.homeRow, flexDirection: imgLeft ? 'row' : 'row-reverse' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div style={{ ...s.homeImgWrap, background: imgLeft ? '#f0ebe0' : '#111', position: 'relative' }}>
        <ParticleCanvas theme={theme} />
        <img ref={imgRef} src={brume.img} alt={brume.name} style={s.homeImg} loading="lazy" />
      </div>
      <div style={{ ...s.homeInfo, background: imgLeft ? 'var(--creme)' : '#0a0a0a' }}>
        <p style={{ ...s.type, color: 'var(--or)' }}>{brume.type}</p>
        <h3 style={{ ...s.name, color: imgLeft ? 'var(--noir)' : '#fff' }}>{brume.name}</h3>
        <div style={s.homeRule} />
        <p style={{ ...s.desc, color: imgLeft ? 'rgba(10,10,10,0.6)' : 'rgba(255,255,255,0.5)' }}>{brume.desc}</p>
        <p style={s.notes}>{brume.notes}</p>
        <p style={s.price}>{brume.price}</p>
      </div>
    </div>
  )
}

const s = {
  section: { background: 'var(--creme)', color: 'var(--noir)', paddingBottom: 80 },
  subheader: { textAlign: 'center', padding: '32px 48px 16px' },
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
  homeRow: {
    display: 'flex',
    width: '100%',
    height: 400,
  },
  homeImgWrap: {
    flex: '0 0 42%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImg: { width: '100%', height: '100%', objectFit: 'contain', display: 'block', willChange: 'transform', position: 'relative', zIndex: 2 },
  homeInfo: {
    flex: 1,
    padding: '44px 56px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  homeRule: { width: 40, height: 1, background: 'var(--or)', margin: '20px 0', opacity: 0.6 },
  sweetWrap: {
    display: 'flex',
    margin: '0 48px',
    border: '1px solid rgba(201,168,76,0.18)',
    background: '#fff',
    overflow: 'hidden',
  },
  sweetImg: { flex: '0 0 52%', overflow: 'hidden' },
  sweetPhoto: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  sweetContent: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  sweetItem: { padding: '36px 40px' },
  sweetName: { fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, marginBottom: 10, color: 'var(--noir)' },
  sweetDesc: { fontSize: 13, lineHeight: 1.75, color: 'rgba(10,10,10,0.58)', marginBottom: 10 },
}
