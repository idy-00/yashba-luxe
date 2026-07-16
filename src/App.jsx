import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Histoire from './components/Histoire'
import ProductSection from './components/ProductSection'
import FeatureProduct from './components/FeatureProduct'
import Citation from './components/Citation'
import BrumesSection from './components/BrumesSection'
import AutresProduits from './components/AutresProduits'
import DiffuseursSection from './components/DiffuseursSection'
import Coffrets from './components/Coffrets'
import Commander from './components/Commander'
import Localisation from './components/Localisation'
import Footer from './components/Footer'
import WaFloat from './components/WaFloat'
import { parfumsFemme, parfumsHomme } from './data/products'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Histoire />
      <div className="gold-divider" />

      <ProductSection
        id="parfums-femme"
        eyebrow="Extrait de Parfum 50ml"
        title="Parfums Femme"
        price="35 000 FCFA"
        products={parfumsFemme}
        dark
      />
      <FeatureProduct
        imgSrc="/WhatsApp Image 2026-06-05 at 10.45.17 PM.jpeg"
        imgAlt="Yash Kalina"
        eyebrow="Fragrance Signature"
        name="Yash Kalina"
        desc="Plonger dans Yash Kalina, c'est traverser le désert d'or jusqu'aux jardins fleuris du Sahel. La fragrance signature de Yashba Luxe pour la femme africaine moderne — libre, élégante, inoubliable."
        notes={[
          { label: 'Tête', value: 'Bergamote\nFleur de Tiaré' },
          { label: 'Cœur', value: 'Rose de Damas\nJasmin sauvage' },
          { label: 'Fond', value: 'Musc blanc\nSantal, Vanille' },
        ]}
        price="35 000 FCFA · Extrait de Parfum 50ml"
        imgLeft
      />

      <div className="gold-divider" />

      <ProductSection
        id="parfums-homme"
        eyebrow="Extrait de Parfum 50ml"
        title="Parfums Homme"
        price="35 000 FCFA"
        products={parfumsHomme}
        dark
      />
      <FeatureProduct
        imgSrc="/mouhamed-sultan.jpeg"
        imgAlt="Mouhamed Sultan"
        eyebrow="Parfum d'Homme"
        name="Mouhamed Sultan"
        desc="Yashba Luxe incarne la rencontre entre fraîcheur vibrante, élégance florale et profondeur orientale. Un parfum sophistiqué et puissant, à la fois moderne et intemporel."
        notes={[
          { label: 'Tête', value: 'Bergamote, Citron\nPoivre rose' },
          { label: 'Cœur', value: 'Jasmin, Rose\nEncens, Géranium' },
          { label: 'Fond', value: 'Ambre gris, Santal\nMusc, Patchouli\nFève tonka, Vanille' },
        ]}
        price="35 000 FCFA · Extrait de Parfum 50ml"
        light
      />

      <Citation />
      <BrumesSection />
      <div className="gold-divider" />
      <AutresProduits />
      <DiffuseursSection />
      <Coffrets />
      <Commander />
      <Localisation />
      <Footer />
      <WaFloat />
    </>
  )
}
