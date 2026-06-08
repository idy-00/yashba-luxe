import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Histoire from './components/Histoire'
import ProductSection from './components/ProductSection'
import FeatureProduct from './components/FeatureProduct'
import Citation from './components/Citation'
import BrumesSection from './components/BrumesSection'
import AutresProduits from './components/AutresProduits'
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
        imgSrc="/WhatsApp Image 2026-06-05 at 10.45.26 PM (2).jpeg"
        imgAlt="Bacar Suprême"
        eyebrow="Le Best-Seller Masculin"
        name="Bacar Suprême"
        desc="Depuis son lancement, Bacar Suprême s'impose comme la référence masculine de Yashba Luxe. Son équilibre parfait entre puissance et élégance en fait l'allié indispensable de l'homme qui veut marquer chaque occasion."
        notes={[
          { label: 'Tête', value: 'Bergamote\nPoivre rose' },
          { label: 'Cœur', value: 'Bois de gaïac\nCuir fumé' },
          { label: 'Fond', value: 'Oud sombre\nAmbre gris' },
        ]}
        price="35 000 FCFA · Extrait de Parfum 50ml"
        light
      />

      <Citation />
      <BrumesSection />
      <div className="gold-divider" />
      <AutresProduits />
      <Coffrets />
      <Commander />
      <Localisation />
      <Footer />
      <WaFloat />
    </>
  )
}
