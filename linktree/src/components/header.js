import perfil from '../images/perfil.jpg'
import bg from '../images/xS.gif'
import styles from './header.module.css'
function Header() {
  return (
    <header class={styles.header}>
        <div class={styles.bg}>
        </div>
        <div class={styles.container}>
            <div class={styles.perfil}>
                <img class={styles.img_perfil} src={perfil}/>
            </div>
            <div class={styles.titulo}>
                <h1>Alice Costa</h1>
            </div>
        </div>
    </header>
  );
}

export default Header;
