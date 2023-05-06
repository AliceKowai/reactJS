import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { parse, v4 as uuidv4 } from 'uuid'
import styles from './project.module.css'
import Loading from '../layouts/loading'
import Container from '../layouts/container'
import ProjectForm from '../projects/projectForm'
import Message from '../layouts/messages'
import ServiceForm from '../service/serviceForm'
import ServiceCard from '../service/serviceCard'

function Project() {
    const { id } = useParams()

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)

    const [message, setMessage] = useState("")
    const [type, setType] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setServices(data.services)
            })
            .catch((err) => console.log(err))
    }, [id])

    function EditPost(project) {
        setMessage('')
        if (project.budget < project.cost) {
            setMessage('O Orçamento não pode ser menor que o custo do projeto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado')
                setType('success')
            })
            .catch((err) => console.log(err))
    }

    function createService() {
        setMessage("")
        let lastService = project.services[project.service.length - 1]

        lastService = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.service.pop()
            return false
        }

        project.cost = newCost


        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false)
            }).catch(err => console.log(err))

    }

    function removeService(id, cost) {
        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

        fetch(`http://localhost:500/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        }).then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setServices(servicesUpdated)
                setMessage('Serviço removido com sucesso')
            })
            .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {
                project.name ? (
                    <div>

                        <Container customClass="column">
                            {message && <Message type={type} msg={message} />}
                            <div>
                                <h1>projeto: {project.name}</h1>
                                <button onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                                {!showProjectForm ? (
                                    <div>
                                        <p>
                                            <span>Categoria: </span>{project.category.name}
                                        </p>
                                        <p>
                                            <span>Total no Orçamento: </span> R${project.badget}
                                        </p>
                                        <p>
                                            <span>Total ultilizado: </span>{project.cost}
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <ProjectForm
                                            handleSubmit={EditPost}
                                            btnText="Concluir edição"
                                            projectData={project}
                                        />
                                    </div>
                                )

                                }
                            </div>
                            <div className={styles.service_form_container}>
                                <h2>Adicione um serviço</h2>
                                <button className={styles.btn} onClick={toggleServiceForm}>
                                    {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                                </button>
                                <div className={styles.project_info}>
                                    {showServiceForm && <ServiceForm handleSubmit={createService} btnText="Adicionar Serviço" projectData={project} />}
                                </div>
                            </div>
                            <h2>serviços</h2>
                            <Container customClass="start">
                                {services.length > 0 &&
                                    services.map((service) => {
                                        <ServiceCard id={service.id} name={service.name} cost={service.cost}
                                            description={service.description} key={service.id} handleRemove={removeService} />
                                    })
                                }
                                {
                                    services.length === 0 && <p>Não há serviços cadastrados</p>
                                }
                            </Container>
                        </Container>
                    </div>
                ) : <Loading />
            }
        </>
    )
}

export default Project