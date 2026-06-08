import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function ProductCard({ product, index }) {
  const cardRef = useRef(null)
  const imgRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  const onEnter = () => {
    setHovered(true)
    gsap.to(imgRef.current, { scale: 1.07, filter: 'brightness(0.65)', duration: 0.6, ease: 'power2.out' })
    gsap.to(cardRef.current.querySelector('.card-info'), { borderColor: 'rgba(201,168,76,0.6)', duration: 0.3 })
  }
  const onLeave = () => {
    setHovered(false)
    gsap.to(imgRef.current, { scale: 1, filter: 'brightness(0.88)', duration: 0.6, ease: 'power2.out' })
    gsap.to(cardRef.current.querySelector('.card-info'), { borderColor: 'rgba(201,168,76,0.18)', duration: 0.3 })
  }

  return (
    <div
      ref={cardRef}
      style={s.card}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div style={s.imgWrap}>
        <img
          ref={imgRef}
          src={product.img}
          alt={product.name}
          style={s.img}
          loading="lazy"
        />
      </div>
      <div className="card-info" style={s.info}>
        <p style={s.type}>{product.type}</p>
        <h3 style={s.name}>{product.name}</h3>
        <p style={s.desc}>{product.desc}</p>
        {product.notes && (
          <p style={s.notes}>
            ♦ Tête : {product.notes.tete} &nbsp;·&nbsp; Cœur : {product.notes.coeur} &nbsp;·&nbsp; Fond : {product.notes.fond}
          </p>
        )}
        <p style={s.price}>{product.price}</p>
      </div>
    </div>
  )
}

const s = {
  card: {
    background: '#111',
    overflow: 'hidden',
    cursor: 'default',
  },
  imgWrap: {
    aspectRatio: '3/4',
    overflow: 'hidden',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    filter: 'brightness(0.88)',
    willChange: 'transform, filter',
  },
  info: {
    padding: '22px 22px 26px',
    borderTop: '1px solid rgba(201,168,76,0.18)',
    transition: 'border-color 0.3s',
  },
  type: {
    fontSize: 10,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: 'var(--or)',
    marginBottom: 8,
    fontFamily: 'var(--sans)',
  },
  name: {
    fontFamily: 'var(--serif)',
    fontSize: 22,
    fontWeight: 400,
    marginBottom: 10,
    color: '#fff',
  },
  desc: {
    fontSize: 13,
    lineHeight: 1.75,
    color: 'rgba(255,255,255,0.48)',
    marginBottom: 12,
  },
  notes: {
    fontSize: 11,
    color: 'rgba(201,168,76,0.65)',
    lineHeight: 1.6,
    letterSpacing: '0.3px',
    marginBottom: 14,
  },
  price: {
    fontFamily: 'var(--serif)',
    fontSize: 18,
    color: 'var(--or)',
    fontWeight: 400,
  },
}
