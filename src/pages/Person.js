import { useEffect, useState } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import styles from "./css/Person.module.css";
import { FaArrowRight, FaEdit, FaUpload } from "react-icons/fa";
import { useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";



function Person({ name, email, password, alt, image, nav,msg,fechar }) {
  const [nome, setNome] = useState(name);
  const [emailValue, setEmailValue] = useState(email);
  const [passwordValue, setPasswordValue] = useState(password);
  const [isNomeDisabled, setIsNomeDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);

  const nomeInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const handleEditInput = (inputName) => {
    if (inputName === "nome") {
      setIsNomeDisabled(!isNomeDisabled);
      nomeInputRef.current.classList.toggle("focado")
    } else if (inputName === "email") {
      setIsEmailDisabled(!isEmailDisabled);
      emailInputRef.current.classList.toggle("focado")
    
    } else if (inputName === "password") {
      setIsPasswordDisabled(!isPasswordDisabled);
      passwordInputRef.current.classList.toggle("focado")  
    }    
   
    
  };

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  //pegar as informações do usuario
  useEffect(()=>{
      axios.get("/user/id").then(
        (response)=>{
          setNome(response.data.response[0].nome);
          setEmailValue(response.data.response[0].email);
          setPasswordValue(response.data.response[0].senha)

        }
      ).catch(err => console.log(err))
  },[])
  //Sair do Login Atual
  const logout = ()=>{
    Cookies.remove("token");
    window.location.href = "/";
  }
  //Alterar os dados
  const updateUser = ()=>{

  if (!/^[a-zA-Z\s]+$/.test(nome)) {
    msg({title:"Erro!",body:"O nome não pode conter números ou caracteres especiais"});
  }
  else if (!emailValue.includes("@")) {
    msg({title:"Erro!",body:"O email deve conter o caractere '@'"});
  }
  else if ( !/(?=.*\d)(?=.*[!@#\$%\^&\*])/.test(passwordValue)) {
    msg({title:"Erro!",body:"A senha deve conter pelo menos 1 número e 1 caractere especial"});
  }else{
    const user ={
      nome: nome,
      email: emailValue,
      senha: passwordValue
    }
    axios.put("/user",user).then(response =>{
        msg({title:"Sucesso!",body:response.data.mensagem});
          }).catch(err =>  msg({title:"Erro!",body:err}));
  }
  fechar();
  }

  return (
    <Section padding="6em" flex="column" gaps="5em 0" color="F9F9F9">
      <div className={`${styles.containerPerson}`}>
        <div className={`${styles.containerName}`}>
          <img src={image} alt={alt} className={`${styles.perfilImage}`} />
          
        </div>
        <div className={`${styles.containerCampus}`}>
        <div>
        <label htmlFor="namePerson"></label>
            <input
              type="text"
              value={nome}
              name="namePerson"
              id="namePerson"
              onChange={handleNomeChange}
              onBlur={(e)=> handleEditInput("nome")}
              disabled={isNomeDisabled}
              ref={nomeInputRef}
              className={styles.inputNAme}
            />
            <span>
              <FaEdit onClick={(e) => handleEditInput("nome")} />
            </span>
          </div>
          <div>
            <label htmlFor="emailPerson"></label>
            <input
              type="text"
              value={emailValue}
              name="emailPerson"
              id="emailPerson"
              onChange={handleEmailChange}
              onBlur={(e)=> handleEditInput("email")}
              disabled={isEmailDisabled}
              ref={emailInputRef}
            />
            <span>
              <FaEdit onClick={(e) => handleEditInput("email")} />
            </span>
          </div>
          <div>
            <label htmlFor="passwordPerson"></label>
            <input
              type="password"
              value={passwordValue}
              name="passwordPerson"
              id="passwordPerson"
              onBlur={(e)=> handleEditInput("password")}
              onChange={handlePasswordChange}
              disabled={isPasswordDisabled}
              ref={passwordInputRef}
            />
            <span>
              <FaEdit onClick={(e) => handleEditInput("password")} />
            </span>
          </div>
          <Button click={updateUser}>Salvar <FaUpload/></Button>
          <Button click={logout} >Logout <FaArrowRight /></Button>
        </div>
      </div>
    </Section>
  );
}

export default Person;
