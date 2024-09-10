import './App.css';
import { ExtraFeatures } from './Components/ExtraFeatures';
import { Features } from './Components/Features';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Highlights } from './Components/Highlights';


function App() {
  return (
    <div className="container">
      <Header/>
      <Hero />
      <Highlights />
      <Features />
      <ExtraFeatures />
      <Footer />
    </div>
  );
}

export default App;
