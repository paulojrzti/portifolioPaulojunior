import logo from '../../assets/logo.svg'
import './menu.css';
function Menu ( ){
    return (
    <>
    <nav>
        <img src={logo} id='logo' alt="logo-paulojunior-desenvolvedor-front-end" />
        <ul>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
            <li><button></button></li>
        </ul>
    </nav>
    </>
    );
}
export default Menu;