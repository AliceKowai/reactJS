//img
import savings from "../../images/savings.svg"
import LinkButton from "../layouts/linkButton";

//css 
import styles from "./home.module.css"

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerencias os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="costs" />
        </section>
    )
}

export default Home;