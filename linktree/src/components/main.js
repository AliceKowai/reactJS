import styles from "./main.module.css"
function Main(props) {
    return (
        <div className={`${styles.mainContainer}`}>
            <div style={{ background: `url(${props.bg})`, backgroundRepeat: 'no-repeat',backgroundPosition: "center" }} className=" position-absolute z-0 w-100 d-flex flex-column justify-content-center bg">
                <div className={`bd-placeholder-img rounded-circle ${styles.fotoPerfil} mt-3`}>
                    <img src={props.fotoPerfil} />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="m-3">{props.nome} {props.sobrenome}</h1>
                    <p className="card-text">{props.titulo}</p>
                    <ul className={`${styles.lista}list-group w-100 d-flex flex-column align-items-center`}>
                        <li className={`${styles.linkbuttom} rounded-pill p-2 m-2 `}><a className="text-light text-decoration-none" href={props.url1}>{props.link1}</a></li>
                        <li className={`${styles.linkbuttom} rounded-pill p-2 m-2 `}><a className="text-light text-decoration-none" href={props.url2}>{props.link2}</a></li>
                        <li className={`${styles.linkbuttom} rounded-pill p-2 m-2 `}><a className="text-light text-decoration-none" href={props.url3}>{props.link3}</a></li>
                        <li className={`${styles.linkbuttom} rounded-pill p-2 m-2 `}><a className="text-light text-decoration-none" href={props.url4}>{props.link4}</a></li>
                        <li className={`${styles.linkbuttom} rounded-pill p-2 m-2 `}><a className="text-light text-decoration-none" href={props.url5}>{props.link5}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Main;
