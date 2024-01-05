import Message from "../layouts/messages"
import { useLocation } from "react-router-dom"
import Container from '../layouts/container'
import LinkButton from '../layouts/linkButton'
import ProjectCard from '../projects/projectCard'
import Loading from "../layouts/loading"
import styles from './projects.module.css'
import { useEffect, useState } from "react"

function Projects (){
    const [projects, setProjects] = useState([])
    const location = useLocation()
    const [projectmsg, setProjectmsg] = useState("")
    const [removeLoading, setRemoveLoading] = useState(false)
    let message = ""
    if(location.state){
        message = location.state.message
    }

    useEffect(()=>{
        fetch('http://localhost:5000/projects',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setProjects(data)
            console.log(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [])

    function removeProject(id) {
        fetch (`http://localhost:5000/projects/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectmsg("Projeto removido com sucesso")
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1 >Meus projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            {projectmsg && <Message type="success" msg={projectmsg}/>}
            <Container customClass="start">
                { projects.length > 0 &&
                    projects.map((project) => <ProjectCard id={project.id} name={project.name} budget={project.budget} handleRemove={removeProject} category={project.categories.name} key={project.id}/>)}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}

export default Projects