import { useState } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import styles from "./css/Person.module.css";
import { FaArrowRight, FaEdit } from "react-icons/fa";

function Person({ name, email, password, alt, image, nav }) {
  const [nome, setNome] = useState(name);
  const [emailValue, setEmailValue] = useState(email);
  const [passwordValue, setPasswordValue] = useState(password);
  const [isNomeDisabled, setIsNomeDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);

  const handleEditInput = (inputName) => {
    if (inputName === "nome") {
      setIsNomeDisabled(false);
    } else if (inputName === "email") {
      setIsEmailDisabled(false);
    } else if (inputName === "password") {
      setIsPasswordDisabled(false);
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
              disabled={isNomeDisabled}
            />
            <span>
              <FaEdit onClick={() => handleEditInput("nome")} />
            </span>
          </div>
        </div>
        <div className={`${styles.containerCampus}`}>
          <div>
            <label htmlFor="emailPerson">email:</label>
            <input
              type="text"
              value={emailValue}
              name="emailPerson"
              id="emailPerson"
              onChange={handleEmailChange}
              disabled={isEmailDisabled}
            />
            <span>
              <FaEdit onClick={() => handleEditInput("email")} />
            </span>
          </div>
          <div>
            <label htmlFor="passwordPerson">senha:</label>
            <input
              type="password"
              value={passwordValue}
              name="passwordPerson"
              id="passwordPerson"
              onChange={handlePasswordChange}
              disabled={isPasswordDisabled}
            />
            <span>
              <FaEdit onClick={() => handleEditInput("password")} />
            </span>
          </div>
          <Button>Sair <FaArrowRight /></Button>
        </div>
      </div>
    </Section>
  );
}

export default Person;
