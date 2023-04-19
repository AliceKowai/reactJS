import Input from "../form/input"
import Select from "../form/select"
import SubmitButtom from "../form/submitbuttom"

//componentes externos 
import { useEffect, useState } from "react"

function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories',{
            method:'GET',
            headers:{
                'Content-Type': 'aplication/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) =>console.log(err))
    }, [])

    return(
        <form>
            <Input 
                placeholder="Insira o nome do seu projeto" 
                type="text" 
                name="name"
                text="Nome do Projeto"/>
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento do projeto"
            />
            <Select name="category_id" text="Selecione a Categoria" options={categories} />
            <SubmitButtom text={btnText}/>
        </form>
    )
}

export default ProjectForm