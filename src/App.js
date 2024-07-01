import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
