import { createTheme, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import ProfessionalSkills from './Components/ProfessionalSkills/ProfessionalSkills';
import Project from './Components/Project/Project';
import SpeedDialer from './Components/SpeedDialer';
import Context from './Context/Context';

function App() {
  const contextData = useContext(Context) ; 
   
  const themeData = createTheme({
    palette:{
        mode: contextData.theme
    }
})
   console.log(themeData.palette);
  return (
      <ThemeProvider theme={themeData}>
    <div className="App" style={{background:themeData.palette.background.default ,color:themeData.palette.primary.main}}>
          <SpeedDialer />
    <main>
      <Home  />
      <About />
      <ProfessionalSkills />
      <Project />
      <Contact />
    </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
