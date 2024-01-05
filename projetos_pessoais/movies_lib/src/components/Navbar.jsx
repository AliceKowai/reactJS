import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import "./Navbar.css"

const Navbar = ()=>{
    return(
        <nav id="navbar">
            <h2><Link to="/"><BiCameraMovie/>MoviesLib</Link></h2>
            <ul>
                <li><Link to="/movie/1">Movie</Link></li>
                <li><Link to="/search">Search</Link></li>

            </ul>
            <form>
                <input type="text" placeholder="Busque um filme"/>
                <button type="submit"><BiSearchAlt2/></button>
            </form>
        </nav>
    )
}

export default Navbar