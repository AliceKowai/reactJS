//Componentes externos
import { Link } from "react-router-dom";

//componentes criados
import Container from "./container";

//CSS
import styles from "./header.module.css"

//imagem
import logo from "../../images/costs_logo.png"

function Header() {
    return(
        <header>
            <nav className={styles.navbar}>
                <Container>
                <Link to="/"><img src={logo} alt="logo da empresa"/></Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/company">Instituição</Link>
                        </li>
                        <li className={styles.item}>
                            <Link  to="/projects">Projetos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/contact">Contato</Link>
                        </li>
                        
                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default Header