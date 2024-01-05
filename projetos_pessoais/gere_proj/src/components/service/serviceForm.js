import Input from "../form/input";
import SubmitButtom from "../form/submitbuttom";
import styles from "../projects/projectForm.module.css"
import { useState } from "react";

function ServiceForm({handleSubmit, btnText, projectData}) {
    const [service, setService] = useState({})
    function submit(e){
        e.preventDefault()
        projectData.service.push(service)
        handleSubmit(projectData)
    }
    function handleChange(e){
        setService({...ServiceForm, [e.target.name]: e.target.value })
    }
    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" text="Nome do Servicço" name="name"      placeholder="Insira o nome do serviço"
                handleonChange={handleChange}
            />
             <Input 
                type="number" text="Custo do serviço" name="cost"  placeholder="Insira o total do custo do serviço"
                handleonChange={handleChange}
            />
             <Input 
                type="text" text="Descrição do servico" name="description" placeholder="Descrição do serviço"
                handleonChange={handleChange}
            />
            <SubmitButtom text="cu" />
        </form>
    )
}

export default ServiceForm;