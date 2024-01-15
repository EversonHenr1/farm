import styles from './css/Input.module.css'

function Input({type,name,placeholder,text,Change,complete,value,refs}){
    function InputGoogle(e){
        const label = e.target.nextElementSibling;
        const input = e.target;
       if(e.target.value.length > 1){
            input.classList.add(styles.intGoogle)
            label.classList.add(styles.google)
        } else{
            input.classList.remove(styles.intGoogle)
            label.classList.remove(styles.google)
        }
    }
    return(
            <div className={styles.container_input}>
                <input type={type} name={name} autoComplete={complete} id={name} onInput={InputGoogle} placeholder={text} className={styles.input}  onChange={Change}   value={value} ref={refs}/>
                <label htmlFor={name}>{text}</label>
            </div>
    )
}

export default Input