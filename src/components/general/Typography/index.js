import React from "react";
import styles from "./Typography.css";
//import colors from "../colors";

const Typography = (props) => {
    //const color = {
    //    color: colors[props.color]
    //};
    //style={color}
    const style = {
        textAlign: props.align
    }

    let text = props.children;
    let textComponent = null;

    switch(props.type) {
        case "body":
            textComponent = <p style={style} className={styles.Body}>{text}</p>
            break;

        case "body2":
            textComponent = <p style={style} className={styles.Body2}>{text}</p>
            break;

        case "title":
            textComponent = <h1 style={style} className={styles.Title}>{text}</h1>
            break;

        case "subtitle":
            textComponent = <h2 style={style} className={styles.Subtitle}>{text}</h2>
            break;

        case "subtitle2":
            textComponent = <h2 style={style} className={styles.Subtitle2}>{text}</h2>
            break;

        default:
            textComponent = <p style={style} className={styles.Body}>{text}</p>
            break;
    }

    return (textComponent);
}

export default Typography;