import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Services from './components/Services';
import WorkProfile from './components/WorkProfile';

function App() {
  return (
      <div className="App" style={{ display: 'flex', justifyContent: 'space-between',flexDirection:'column' }}>
        <Header/>
       <Home/>
<Skills/>
<WorkProfile/>
<Services/>
        <Contact/>
        <AboutMe/>
      </div>

  );
}

export default App;
