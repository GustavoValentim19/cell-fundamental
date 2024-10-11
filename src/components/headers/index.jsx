import './style.css'
import Logo from '../logo'
import OpcoesHeader from '../header-options'
import IconesHeader from '../header-icons'
function Header() {
   return (
       <header className='App-header'>
           <Logo/>
           <OpcoesHeader/>
           <IconesHeader/>
       </header>
   )
}
export default Header