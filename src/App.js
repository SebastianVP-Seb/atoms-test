import './App.scss';
import Easy from './pages/easy/Easy';
import Features from './pages/features/Features';
import Footer from './pages/footer/Footer';
import NavbarN from './components/navbar/NavbarN';
import Pricing from './pages/pricing/Pricing';
import Questions from './pages/questions/Questions';
import Build from './pages/build/Build';
import World from './pages/world/World';
import { BrowserRouter } from 'react-router-dom';
import BackG from './components/bg/BackG';

function App() {
  return (
    <BrowserRouter>

      <NavbarN />
      <BackG />


      {/* <Build /> */}
      <Features />
      <Easy />
      <Pricing />
      <World />
      <Questions />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
