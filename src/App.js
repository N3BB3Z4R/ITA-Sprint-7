import { useState, useEffect } from 'react';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle.jsx';
import { Welcome } from './components/Modals/Welcome.js';
import NavBar from './components/NavBar';
import ContainerBlock from './components/ContainerBlock';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const date = new Date().toISOString().slice(0, 10)
  const [user, setUser] = useState(localStorage.getItem('user') || null); 

  useEffect(() => {
    // escribir User Name en localStorage
    localStorage.setItem('user', user, []);    
  }, [user]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <GlobalStyle />
              <Welcome user={user} setUser={setUser}/>
              <div className='pageContainer'>
                <NavBar title={"Hola! " + user + ". Bienvenido al Generador de Presupuestos"} />
                <ContainerBlock date={date} user={user}/>
                <Footer />
              </div>
            </>
          }>            
          </Route>
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
