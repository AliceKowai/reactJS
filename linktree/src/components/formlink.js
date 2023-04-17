import React, { useState, useEffect } from 'react';
import styles from "./formlink.module.css"


function FormLink(props) {

    const [inputIds, setInputIds] = useState([]);
    const [nomeLink, setNomeLink] = useState([])


    const handleAddInput = () => {
        const newInputId = `input${inputIds.length + 1}`;
        const nomeInputLink = `nomeLink${nomeLink.length + 1}`
        setInputIds([...inputIds, newInputId])
        setNomeLink([...nomeLink, nomeInputLink]);
    };
    return (
        <div className="p-3">
            <h2>Lista de links</h2>
            <form className={styles.cagao}>
                <div class="row">
                    <div class="col">
                        <input id='fotoPerfil' type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="link da foto de perfil" onChange={props.onChange} />
                    </div>
                    <div class="col">
                        <input id='bg' type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="link do background" onChange={props.onChange} />
                    </div>
                </div>
                <input id='titulo' type="text" className={`form-control p-2 mt-2 ${styles.input_link}`} placeholder="Titulo, ex: Desenvolvedor web" onChange={props.onChange} />
                <div class="row">
                    <div class="col py-2">
                        <input id='nome' type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="Nome" onChange={props.onChange} />
                    </div>
                    <div class="col py-2">
                        <input id='sobrenome' type="text" className={`form-control p-2 ${styles.input_link}`} placeholder="Sobrenome" onChange={props.onChange} />
                    </div>
                    <div className='row'>
                        <div class="col py-2">
                            <p>Nome dos links</p>
                            {nomeLink.map((id) => (
                                <input key={id} id={id} type="text" className={`form-control p-2 pt-7 ${styles.input_link}`} placeholder="ex: Instagram" onChange={props.onChange} />
                            ))}
                        </div>
                        <div class="col py-2">
                            <p>Link</p>
                            {inputIds.map((id) => (
                                <input key={id} id={id} type="text" className={`form-control p-2 pt-7 ${styles.input_link}`} placeholder="ex:https://www.instagram.com/alice_kowai/" onChange={props.onChange} />
                            ))}
                        </div>
                    </div>
                </div>
                <div id="co">
                </div>
                <button type="button" onClick={handleAddInput} className={`btn p-2 m-4 ${styles.botao_link}`}>Adicionar</button>
                <button type="submit" onClick={props.onClick} className={`btn p-2 ${styles.botao_link}`}>Concluir</button>
            </form>
        </div>
    );
}

export default FormLink;

