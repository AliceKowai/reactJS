import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import { addCampaign, getLastCampaignId } from "@/services/web3Service";

function Create() {

    const [campaign, setCampaign] = useState({});
    const [message, setMessage] = useState("")

    function onInputChange(evt) {
        setCampaign(prevState => ({ ...prevState, [evt.target.id]: evt.target.value }));
    }

    function btnSaveClick() {
        setMessage("Salvando... Aguarde...")
        addCampaign(campaign)
            .then(tx => getLastCampaignId())
            .then(id => setMessage(`Campanha salva com ID ${id}. Avise seus amigos e passe a eles esse numéro`))
            .catch(err => {
                console.error(err)
                setMessage(err.message)
            })
    }
    

    return (
        <main className="flex flex-wrap items-center justify-between p-[45px] px-20">
            <div className='w-1/2'>
                <h1 className='text-6xl p-4 max-w-md'>Donate Crypto</h1>
                <p className="px-4">Criar Campanha</p>
                <div className="p-6 mt-4 h-full border border-coolGray-100 overflow-hidden rounded-md shadow-dashboard">
                    <input type="text" placeholder="Titulo" id="title" className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal oultine-none focus:border-green-500 border boder-coolGray-200 rounded-lg shadown-input" onChange={onInputChange}></input>
                    <input type="text" placeholder="Descrição" id="description" className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal oultine-none focus:border-green-500 border boder-coolGray-200 rounded-lg shadown-input mt-4"onChange={onInputChange}></input>
                    <input type="text" placeholder="URL do video" id="videoUrl" className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal oultine-none focus:border-green-500 border boder-coolGray-200 rounded-lg shadown-input mt-4"onChange={onInputChange}></input>
                    <input type="text" placeholder="URL da imagem" id="imageUrl" className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal oultine-none focus:border-green-500 border boder-coolGray-200 rounded-lg shadown-input mt-4"onChange={onInputChange}></input>
                    <button className="block py-2 mt-4 px-5 text-center text-white font-bold text-sm leading-6 bg-blue-500 rounded-3xl transition duration-200" onClick={btnSaveClick}>Criar Campanha</button>
                    <Link href="/" className="block py-2 mt-4 px-11 text-center text-white font-bold text-sm leading-6 w-32 bg-slate-400 rounded-3xl transition duration-200">Voltar</Link>
                </div>
            </div>
            {
                message? <div className="">{message}</div>:<></>
            }
            <Footer />
        </main>
    )

}



export default Create;