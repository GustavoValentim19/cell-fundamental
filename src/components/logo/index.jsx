import './style.css';
import logo from '../../images/logo.png';

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} alt='logo' 
                className='logo-img'
            ></img>
            <p><strong>Cell</strong>Fundamentals</p>
        </div>
    )
}

export default Logo;