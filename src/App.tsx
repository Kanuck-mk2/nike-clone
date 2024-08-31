'use client'


import {
  CustomerReviews,
  Footer,
  Hero,
  SuperQuality,
  Subscribe,
  PopularProducts,
  Services,
  SpecialOffer,
} from './sections';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <main className=" bg-dark relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-gradient-bg padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
