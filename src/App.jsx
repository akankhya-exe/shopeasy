import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter.jsx';
import Deals from './components/Deals.jsx';
import Categories from './components/Categories.jsx';
import Products from './components/Products.jsx';
import Hero from './components/Hero.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Deals />
        <Features />
        <Reviews />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;