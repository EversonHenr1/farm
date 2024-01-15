import React, { useState } from "react";
import Input from "./Input";
import Submit from "./Submit";
import styles from "./css/Register.module.css";
import axios from "axios";
import Cookies from "js-cookie";

function Register({ msgOpen, msg }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const handlelogin = (e) => {
    const nome = e.target.name;
    const value = e.target.value;
    switch (nome) {
      case "name_cadastro":
        setName(value);
        break;
      case "email_cadastro":
        setEmail(value);
        break;
      case "email_confim_cadastro":
        setConfirmEmail(value);
        break;
      case "senha_cadastro":
        setSenha(value);
        break;
      case "senha_confim_cadastro":
        setConfirmSenha(value);
        break;
    }
  }

  function msgError(msgs, tittle) {
    msg({
      body: msgs,
      title: tittle
    });
    msgOpen();
  }

  function isAlphaNumeric(text) {
    return /^[a-zA-Z0-9\s]*$/.test(text);
  }

  
  const isPasswordValid = (password) => {
    // Deve conter pelo menos 1 número e 1 caractere especial
    return /(?=.*\d)(?=.*[!@#\$%\^&\*])/.test(password);
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if (name === "" || !isAlphaNumeric(name)) {
      msgError("O campo de nome é obrigatório e não pode conter números ou caracteres especiais.", "Erro no Nome");
      return;
    }

    if ( email !== confirmEmail) {
      msgError("Os campos de email não são válidos ou não correspondem.", "Erro no Email");
      return;
    }

    if (!isPasswordValid(senha) || senha !== confirmSenha) {
      msgError("Os campos de senha não são válidos ou não correspondem. A senha deve conter pelo menos 1 número e 1 caractere especial.", "Erro na Senha");
      return;
    }

    // Se todas as validações passarem, você pode continuar com o envio do formulário.
    // Seu código de envio aqui.
    axios.post("/user",{nome:name,email:email,senha:senha})
   .then(response =>{

    msgError(response.data.mensage,"Usuarios Criado")
    setTimeout(()=>{
        Cookies.set('token',response.data.token, { expires: 1 });
        window.location.reload()
    },1000)

    })
    .catch(err =>{msgError(err.response,"ERRO")} )
  }

  return (
    <>
      <h2>Cadastre-se</h2>
      <form className={styles.register} onSubmit={handleRegister}>
        <Input
          type="text"
          text="Digite seu nome "
          complete="name"
          name="name_cadastro"
          Change={handlelogin}
          placeholder="Digite seu nome "
          required="true"
          value={name}
        />
        <Input
          type="email"
          text="Digite seu email"
          complete="email"
          name="email_cadastro"
          Change={handlelogin}
          placeholder="Digite seu email"
          required="true"
          value={email}
        />
        <Input
          type="email"
          text="Confirme seu email"
          name="email_confim_cadastro"
          Change={handlelogin}
          placeholder="Confirme seu email"
          required="true"
          value={confirmEmail}
        />
        <Input
          type="password"
          text="Digite sua senha"
          complete="current-password"
          Change={handlelogin}
          name="senha_cadastro"
          required="true"
          placeholder="Digite sua senha"
          value={senha}
        />
        <Input
          type="password"
          text="Confirme sua senha"
          name="senha_confim_cadastro"
          Change={handlelogin}
          required="true"
          placeholder="Confirme sua senha"
          value={confirmSenha}
        />
        <div className={styles.containerbtn}>
          <Submit color="darkred" name="submit_cadastro" text="Cadastrar-se" />
        </div>
      </form>
    </>
  );
}

export default Register;
