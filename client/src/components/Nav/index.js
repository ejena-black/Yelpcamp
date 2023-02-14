// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './nav.css'


const Navbar = ({darkmode}) => {


    return(
        <header className='nav-container'>
            <Link to='/'><h1>Yelpcamp</h1></Link>
            <nav>
                <div className='switch-wrapper'>
                    <input type="checkbox" id='switch-input' onClick={darkmode}/>
                    <label htmlFor='switch-input'>
                        <div className='switch'></div>
                    </label>
                </div>
                <Link to='/'>Sign Up</Link>
                <Link to='login'>Login</Link>
                <Link to='create'>Create Campground</Link>
            </nav>
        </header>
    )
}


export default Navbar