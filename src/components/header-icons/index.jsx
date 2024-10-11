import './style.css'
import perfil from '../../images/perfil.svg'
const icones = [perfil]

function IconesHeader() {
   return (
       <ul className='icones'>
           { icones.map( (icone) => (
             <li className='icone'><img src={icone}></img></li>
           )) }
       </ul>
   )
}
export default IconesHeader