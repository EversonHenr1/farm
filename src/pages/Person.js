import { useState } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import styles from "./css/Person.module.css";
import { FaArrowRight, FaCloud, FaEdit, FaSave, FaUpload } from "react-icons/fa";
import { useRef } from "react";

function Person({ name, email, password, alt, image, nav }) {
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

  return (
    <Section padding="6em" flex="column" gaps="5em 0" color="D92911">
      <div className={`${styles.containerPerson}`}>
        <div className={`${styles.containerName}`}>
          <img src={image} alt={alt} className={`${styles.perfilImage}`} />
          <div>
            <input
              type="text"
              value={nome}
              name="namePerson"
              id="namePerson"
              onChange={handleNomeChange}
              onBlur={(e)=> handleEditInput("nome")}
              disabled={isNomeDisabled}
              ref={nomeInputRef}
            />
            <span>
              <FaEdit onClick={(e) => handleEditInput("nome")} />
            </span>
          </div>
        </div>
        <div className={`${styles.containerCampus}`}>
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
          <Button>Salvar <FaUpload/></Button>
          <Button>Logout <FaArrowRight /></Button>
        </div>
      </div>
    </Section>
  );
}

export default Person;
