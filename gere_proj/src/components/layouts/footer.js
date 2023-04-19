//componentes externos
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
//css

import styles from "./footer.module.css"


function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
                <li>
                    <FaFacebook/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer;