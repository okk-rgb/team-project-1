import './Header.css'
import HImg  from '../../assets/header__logo.png'
import { ImCart } from 'react-icons/im'



const Header = () => {
  return(
    <div className="container">
      <div className="site__header">
        <img src={HImg} alt="" />

        <nav className='header__navbar'>
          <ul>
            <li>
              <a href="" className='h'>Home</a>
            </li>
            <li>
              <a href="" className='h1'>Order</a>
            </li>
            <li>
              <a href="" className='h1'>Company</a>
            </li>
            <li>
              <a href="" className='h1'>FAQ</a>
            </li>
            <li>
              <a href="" className='h1'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className="icon">
          <ImCart />
        </div>
      </div>
    </div>
  )
}

export default Header