import globe from '../assets/globe.png'

export default function Navbar(){
    return(
        <nav className="nav-container">
            <img src={globe} className='nav-img'/>
            <p className='nav-title'>my travel journal.</p>
        </nav>
    )
}