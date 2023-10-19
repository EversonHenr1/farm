import styles from "./css/SelectType.module.css"
function SelectType({name,options,value,handleChange}){

    return(
        <div>
            <label htmlFor={name} className={styles.label}>Selecione um tipo de  ingrediente:</label>
            <select name={name} id={name} className={styles.select} value={value ||""} onChange={handleChange}>
                <option disabled value="">Selecione um tipo de ingrediente</option>
                {options.map((option)=>(
                    <option value={option.type} id={option.id} key={option.id}>{option.type}</option>
                ))}
            </select>
        </div>
    )

}

export default SelectType;