import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import CardSection from './Components/CardSection';
import FooterSection from './Components/FooterSection';
import FeatureSection from './Components/FeatureSection';

function App() {
  return (
    <div>
      <NavBar />
        <FeatureSection />
        <HeroSection />
        <CardSection />
        <FooterSection />
    
    </div>

  );
}

export default App;
