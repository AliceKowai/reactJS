import perfil from '../images/perfil.jpg'
import bg from '../images/xS.gif'
import styles from './header.module.css'
function Header() {
  return (
    <header>
      <div className={styles.bg}>
        <div className={styles.perfil}>
          <div className={styles.container}>
            <img className={styles.img_perfil} src={perfil} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
