import Input from "../form/input"
import Select from "../form/select"
import SubmitButton from "../form/submitbuttom"

//componentes externos 
import { useEffect, useState } from "react"

function ProjectForm({ btnText, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    function handleCategory(e) {
        setProject({
            ...project,
            categories: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
        console.log(project)
    }

    return (
        <form onSubmit={submit}>
            <Input
                placeholder="Insira o nome do seu projeto"
                type="text"
                name="name"
                handleonChange={handleChange}
                value={project.name? project.name : ''}
                text="Nome do Projeto" />
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento Total"
                handleonChange={handleChange}
                value={project.budget? project.budget: ''}
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleonChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm