import React, { useState, useEffect } from 'react';
import styles from "./formlink.module.css"
import Header from "./header";


function FormLink(props) {

    const [components, setComponents] = useState([]);

    useEffect(() => {
    }, [components]);


    const handleClick = () => {
        setComponents([...components, <MyComponent key={components.length} />]);
    };

    function MyComponent() {
        return <input type="text" className={`form-control mt-2 p-2 ${styles.input_link}`}  placeholder="link 1" onChange={props.onChange}  />;
    }

    return (
        <div className="p-3">
            <h2>Lista de links</h2>
            <form className={styles.cagao}>
                <div class="row">
                    <div class="col">
                        <input type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="link da foto de perfil" onChange={props.onChange} />
                    </div>
                    <div class="col">
                        <input type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="link do background" onChange={props.onChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col py-2">
                        <input type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="Nome" onChange={props.onChange} />
                    </div>
                    <div class="col py-2">
                        <input type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="Sobrenome" onChange={props.onChange}  />
                    </div>
                </div>
                <input type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="link 1" onChange={props.onChange} />
                <div id="co">
                {components}
                </div>
                <button type="button" onClick={handleClick} className={`btn p-2 m-4 ${styles.botao_link}`}>Adicionar</button>
                <button type="submit" className={`btn p-2 ${styles.botao_link}`}>Concluir</button>
            </form>
        </div>
    );
}

export default FormLink;

