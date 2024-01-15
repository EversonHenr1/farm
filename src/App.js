import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import MyRecipes from './pages/MyRecipes';
import AllRecipes from './pages/AllRecipes';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import NewRecipe from './pages/NewRecipe';
import LoginC from './form/LoginC';
import Register from './pages/Register';
import Person from './pages/Person';
import user from "../src/img/user2.png"
import Cookies from 'js-cookie';
import axios from "axios" 
import Messager from './components/Messager';
import Recipe from './pages/Recipe';
import MenssagerOptions from './components/MenssagerOptions';



function App() {
  //Configurações Axios
  axios.defaults.baseURL = "http://localhost:4000";
  //tokken
  //pegar o tokken
  const authToken = Cookies.get('token');

  axios.defaults.headers.common.Authorization= authToken;
  axios.defaults.headers.common['Content-Type']= 'application/json';
  
  //Dados do usuario
  const [name,setName] =useState(null)

  useEffect(() => {
    axios.get("/user")
    .then(response => {
        sessionStorage.setItem("idUSer",response.data.id);
        setName(response.data.nome)
    }).catch(err => console.log(err))
  }, []); 


  const [visualizedLogin,setVisualizedLogin] = useState(false)
  const [off,setOff] = useState(false)
 
  const [msg,setMsg] = useState({title:"",body:""});
  

  function toogleLogin (){ // Alterar a visualizaçãod do login
    if(visualizedLogin  ){
      setVisualizedLogin(false);
    }else{
      setVisualizedLogin(true)
    }
  }

 const toggleMsg = ()=>{
    if(off)
      setOff(false);
    else
      setOff(true)
  }
  

  const [token,setToken] = useState("");

  const tsarray = [1,2,3,4,5,6,7,8,9,10];
  const  [ formattedname,setFormattedname  ] = useState("")

 
   
  return (
    <Router>
      <NavBar user={name} login={toogleLogin}/>
      {(visualizedLogin && !name)&& (<LoginC msg={setMsg} msgOpen={toggleMsg}  off={toogleLogin} />)/* se login for true aparece caso contrario não*/}

      { off && <Messager  msg={msg} fechar={toggleMsg} />}      
  

  
      <main>
        
        <Routes>
          <Route path='/' element={<Home login={toogleLogin} name={name}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/myrecipes' element={<MyRecipes recipes={tsarray}/>}/>
          <Route path='/allrecipes' element={<AllRecipes/>}/>
          <Route path="/newrecipe" element={<NewRecipe msg={setMsg} fechar={toggleMsg}/>}/>
          <Route path="/person" element={<Person image={user} msg={setMsg} fechar={toggleMsg}/>}/>
          <Route path="/recipe/:idRecipe" element={<Recipe mensagem={setMsg} fechar={toggleMsg}/>}/>
        </Routes>
      </main>
      <Footer name={name}/>
    </Router>
  );
}

export default App;
