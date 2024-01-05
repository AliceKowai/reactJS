import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import logo from "../../assets/react.svg"
import kage from '../../assets/kage.png'



const Sidebar = () => {
    return (
        <div className="shadow rounded-end d-flex flex-column flex-shrink-0 justify-content-center p-3 border-end border-danger border-5" style={{width: '280px'}}>
            <span><img style={{width: '200px', height:'200px'}}  src={kage} className="rounded-circle" alt="lider da aldeia o grande kage"/></span>
            <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Ações</span>
            </Link>
            <ul className="nav nav-pills nav-fill flex-column">
                <li className=" nav-item bg-danger rounded-pill text-light text-center my-2 p-2">
                    <Link className="nav-link text-light" href="/" cllinkss="nav-link active" aria-current="page">
                        Agendar 
                    </Link>
                </li>
                <li className="nav-item bg-danger rounded-pill text-light text-center my-2 p-2">
                    <Link className="nav-link text-light" href="/" cllinkss="nav-link active" aria-current="page">
                        PDI
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar