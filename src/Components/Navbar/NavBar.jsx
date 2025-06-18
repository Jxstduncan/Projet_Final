import { Link } from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { fa3 } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
    return (
        <div className="black">
            <div>
                <nav className="black">
                    <div className='df'>
                        <Link to='/'>
                            <button className='btn'>Home</button>
                        </Link>
                        <Link to='/Produit'>
                            <button className='btn'>Produit</button>
                        </Link>
                        <Link to='/Contact'>
                            <button className='btn'>Contact</button>
                        </Link>
                        <Link to='/Favori'>
                            <button className='btn'>
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavBar