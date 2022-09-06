import logo from '../../assets/img/logo.svg';
import './style.css';

export function Header(){
    return(
        <header>
            <div className='edumeta-logo-container'>
                <img src={logo} alt="Logo" />
                <h1>EduMetas</h1>
            <p>Desenvolvido por <a href="http://github.com/eduardotecnologo/" target="_blank"> Eduardo Developer</a> </p>
            </div>
        </header>  
    )
}