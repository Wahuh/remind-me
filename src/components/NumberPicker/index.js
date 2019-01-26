import React from "react";
import Input from "../general/Input";
import styles from "./NumberPicker.css"

const NumberPicker = ({ onChange, value }) => {
    return <Input id="NumberPicker" className={styles.NumberPicker} value={value} onChange={onChange} type="number" min={0}/>
}

export default NumberPicker;