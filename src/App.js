import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Services from './components/Services';

function App() {
  return (
      <div className="App">
        <Header/>
       <Home/>
<Skills/>
<Services/>
        <Contact/>
        <AboutMe/>
      </div>

  );
}

export default App;
