import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home';
import MyRecipes from './pages/MyRecipes';
import AllRecipes from './pages/AllRecipes';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import NewRecipe from './pages/NewRecipe';
import LoginC from './form/LoginC';
import Register from './pages/Register';
import Person from './pages/Person';
import perfil from "../src/img/home/everson.jpg"



function App() {
  const [visualizedLogin,setVisualizedLogin] = useState(false)

  function toogleLogin (){ // Alterar a visualizaçãod do login
    if(visualizedLogin){
      setVisualizedLogin(false);
    }else{
      setVisualizedLogin(true)
    }
  }
  const tsarray = [1,2]
  return (
    <Router>
      <NavBar login={toogleLogin}/>
      {visualizedLogin && (<LoginC off={toogleLogin}/>)/* se login for true aparece caso contrario não*/}
      <main>
       
        <Routes>
          <Route path='/' element={<Home login={toogleLogin}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/myrecipes' element={<MyRecipes recipes={tsarray}/>}/>
          <Route path='/allrecipes' element={<AllRecipes/>}/>
          <Route path="/newrecipe" element={<NewRecipe/>}/>
          <Route path="/person" element={<Person image={perfil} email="eversonhenriquepro781@gmail.com" name="Everson Henrique da Silva" password="everson781"/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
