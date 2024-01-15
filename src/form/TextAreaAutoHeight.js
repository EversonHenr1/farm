import  { useRef } from 'react';
import styles from "./css/TextAreaAutoHeight.module.css"


const TextAreaAutoHeight = ({name,text,change,value}) => {
  const textAreaRef = useRef(null);

  const handleChange = (e) => { //Pula Linha Automaticamente
    const textarea = textAreaRef.current;
    textarea.style.height = 'auto'; 
    textarea.style.height = `${textarea.scrollHeight}px`; 
    if(change){
      change(e)
    }
  };
    function InputGoogle(e){ //Fazer o input subi e descer
      const label = e.target.nextElementSibling;
      const input = e.target;
     if(e.target.value.length > 1){
          input.classList.add(styles.intGoogle)
          label.classList.add(styles.google)
      }else{
          input.classList.remove(styles.intGoogle)
          label.classList.remove(styles.google)
      }
      
  }

  
  return (
    <div className={styles.container}>
      <textarea
      ref={textAreaRef}
      className={`text-area-auto-height ${styles.text}`}
      onChange={handleChange}
      name={name}
      onClick={InputGoogle}
       id={name} 
      onInput={InputGoogle}
      onMouseOut={change}
      placeholder={text}
      value = {value}
     maxLength="200"
    />
      <label  className={styles.label} htmlFor={name}>{text}</label>
    </div>
    
  );
};

export default TextAreaAutoHeight;
