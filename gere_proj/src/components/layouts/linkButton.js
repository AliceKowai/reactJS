import { Link } from "react-router-dom"

//css
import styles from "./linkButton.module.css"

function LinkButton({to,text}) {
    return(
        <Link className={styles.btn} to={to}> {text} </Link>
    )
}

export default LinkButton