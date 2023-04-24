import styles from "./select.module.css"
import { useState } from "react";

function Select({ text, name, options, handleonChange, value }) {

    const [selectedValue, setSelectedValue] = useState(value || '');

    function handleChange(event) {
        setSelectedValue(event.target.value);
        handleonChange(event);
      }

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleonChange}
                value= {name}>
                <option>{value? name : "Selecione uma opção"} </option>
                {options && options.length > 0 && options.map((options) => (
                    <option value={options.id} key={options.id}>{options.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select