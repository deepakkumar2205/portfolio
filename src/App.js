import { createTheme, ThemeProvider } from '@mui/material';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import ProfessionalSkills from './Components/ProfessionalSkills/ProfessionalSkills';
import Project from './Components/Project/Project';
import SpeedDialer from './Components/SpeedDialer';
import Context from './Context/Context';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const contextData = useContext(Context) ; 

  useEffect(() => {
    toast.success('👋😅 Welcome ', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    
  }, [])
  

   
  const themeData = createTheme({
    palette:{
        mode: contextData.theme
    }
})
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
