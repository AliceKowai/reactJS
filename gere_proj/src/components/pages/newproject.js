//css
import styles from "./newproject.module.css"

//components criados
import ProjectForm from "../projects/projectForm"

//componentes externos 
import { useNavigate } from "react-router-dom";

function NewProject() {
    const navigate = useNavigate()
    
    function createPost(project){
        //inicialize cost and services
        project.cost = 0
        project.services = []
    
        fetch('http://localhost:5000/projects',{
            method:'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) =>{
                console.log(data)
                navigate(('/projects'), { state: { message: "Projeto criado com sucesso" } })
            })
            .catch((err) => console.log(err))
    
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;