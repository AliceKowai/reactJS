import loading from '../../images/loading.svg'
import styles from './loading.module.css'

function Loading() {
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading}/>
        </div>
    )
}

export default Loading