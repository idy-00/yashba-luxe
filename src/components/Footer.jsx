import { FaInstagram, FaWhatsapp, FaTiktok, FaSnapchatGhost } from 'react-icons/fa'

const socials = [
  { Icon: FaInstagram, href: 'https://www.instagram.com/yashba_luxe_/', label: 'Instagram' },
  { Icon: FaWhatsapp, href: 'https://wa.me/221776558920', label: 'WhatsApp 1' },
  { Icon: FaWhatsapp, href: 'https://wa.me/221774291571', label: 'WhatsApp 2' },
  { Icon: FaTiktok, href: 'https://www.tiktok.com/@yashbaa.luxe', label: 'TikTok' },
  { Icon: FaSnapchatGhost, href: 'https://snapchat.com/t/fSsFP6Ut', label: 'Snapchat' },
]

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div className="grid-footer">
        <div>
          <p style={s.logo}>YL · Yashba Luxe</p>
          <p style={s.tagline}>The Art of Scent</p>
          <p style={s.address}>
            Sacré-Cœur 3, derrière Pharmacie VDN<br />
            Dakar, Sénégal<br /><br />
            <a href="tel:+221776558920" style={s.tel}>+221 77 655 89 20</a><br />
            <a href="tel:+221774291571" style={s.tel}>+221 77 429 15 71</a>
          </p>
          <div style={s.socialsWrap}>
            {socials.map(sc => (
              <a key={sc.label} href={sc.href} target="_blank" rel="noreferrer" style={s.social} title={sc.label}>
                <sc.Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={s.colTitle}>Collections</h4>
          <ul style={s.list}>
            {['Parfums Femme:#parfums-femme','Parfums Homme:#parfums-homme','Brumes & Ambiances:#brumes','Bougies & Accessoires:#autres','Coffrets Cadeaux:#coffrets'].map(item => {
              const [label, href] = item.split(':')
              return <li key={label}><a href={href} style={s.colLink}>{label}</a></li>
            })}
          </ul>
        </div>
        <div>
          <h4 style={s.colTitle}>La Marque</h4>
          <ul style={s.list}>
            {['Notre Histoire:#histoire','Notre Philosophie:#citation','Commander:#commander'].map(item => {
              const [label, href] = item.split(':')
              return <li key={label}><a href={href} style={s.colLink}>{label}</a></li>
            })}
          </ul>
        </div>
        <div>
          <h4 style={s.colTitle}>Contact</h4>
          <ul style={s.list}>
            {socials.map(sc => (
              <li key={sc.label}><a href={sc.href} target="_blank" rel="noreferrer" style={s.colLink}>{sc.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div style={s.bottom}>
        <p style={s.copy}>© 2025 Yashba Luxe — Tous droits réservés · Dakar, Sénégal</p>
        <p style={s.slogan}>« Là où chaque fragrance raconte une histoire »</p>
      </div>
    </footer>
  )
}

const s = {
  footer: { background: '#050505', padding: '64px 48px 32px', borderTop: '1px solid rgba(201,168,76,0.12)' },
  logo: { fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 600, letterSpacing: '4px', color: 'var(--or)', marginBottom: 6 },
  tagline: { fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'rgba(255,255,255,0.35)', marginBottom: 18 },
  address: { fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.85 },
  tel: { color: 'var(--or)', textDecoration: 'none' },
  socialsWrap: { display: 'flex', gap: 10, marginTop: 20 },
  social: {
    width: 42, height: 42, border: '1px solid rgba(201,168,76,0.3)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    textDecoration: 'none', color: 'var(--or)', borderRadius: 2,
    transition: 'background 0.25s, color 0.25s',
  },
  colTitle: { fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--or)', marginBottom: 18, fontWeight: 400 },
  list: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
  colLink: { fontSize: 13, color: 'rgba(255,255,255,0.42)', textDecoration: 'none', transition: 'color 0.3s' },
  bottom: { borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 },
  copy: { fontSize: 11, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.5px' },
  slogan: { fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'rgba(201,168,76,0.45)' },
}
