import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ProductCard from './ProductCard'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ProductSection({ id, eyebrow, title, price, products, dark }) {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.ps-header-' + id + ' > *', {
      y: 30, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })
    ScrollTrigger.batch('.card-' + id, {
      onEnter: (els) => gsap.from(els, { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }),
      start: 'top 85%', once: true,
    })
  }, { scope: sectionRef })

  return (
    <section id={id} ref={sectionRef} style={{ background: 'var(--noir)', paddingBottom: 80 }}>
      <div className={'ps-header-' + id + ' section-header'} style={s.priceWrap}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title" style={{ color: '#fff' }}>{title}</h2>
        <p style={s.price}>{price}</p>
      </div>
      <div className="grid-cards-3">
        {products.map((p) => (
          <div key={p.id} className={'card-' + id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  )
}

const s = {
  priceWrap: {},
  price: { fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--or)', marginTop: 6 },
}
