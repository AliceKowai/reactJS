import Web3 from "web3";
import ABI from "./ABI.json"

const CONTRACT_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138"

export async function doLogin(){
    if (!window.ethereum) throw new Error("No MetaMask Found");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    console.log(accounts)
    if (!accounts || !accounts.length) throw new Error("Wallet not found/ allowed")
    localStorage.setItem("wallet", accounts[0])
    return accounts[0]
}

function getContract(){
    const web3 = new web3(window.ethereum)
    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, {from});
}

export async function addCampaign (campaign){
    const contract = getContract()
    return contract.methods.addCampaign(campaign.title, campaign.description, campaign.videoUrl, campaign.imageUrl).send();
}