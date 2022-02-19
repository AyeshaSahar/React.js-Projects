import './App.css';
import Header from './components/header.js';
import MainContent from './components/content.js';
import Specs from './components/specs.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div id="container" >
      <Header />
      
      <MainContent/>
      <Specs/>

      <br/>
      <About/>

      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
