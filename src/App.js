import './App.css';

import Description from './Components/DescriptionComponent/DescriptionComponent';
import NavBar from './Components/NavBarComponent/NavBarComponent';
import Projects from './Components/ProjectsComponent/ProjectsComponent';
import Formx from './Components/ContactComponent/ContactComponent';
import Footer from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Description/>
      <Projects/>
      <Formx/>
      <Footer/>
    </div>
  );
}

export default App;
