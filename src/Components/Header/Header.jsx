import './Header.scss'
import { Link } from 'react-router-dom';

// images
import hamburger from '../../assets/img/hamburger.jpg'
import logo from '../../assets/img/logo.jpg'
import video from '../../assets/img/video.png'
import menu from '../../assets/img/menu.png'
import notification from '../../assets/img/notification.png'
import avatar from '../../assets/img/avatar.png'

const Header = () => {
  return (
    <header className='main-header'>
          <img className='main-header__hamburger' src={hamburger} alt="hamburger" width='20' height='17' />
          <Link className='main-header__logo-wrapper-link' to='/'>
            <img className='main-header__logo' src={logo} alt="" width='116' height='25' />
          </Link>
          
          <input className='main-header__search-input' type="search" name="search" id="search" placeholder='Search' autoComplete='off' />

          <div className='main-header__icons icons'>
            <img className='icons__icon' src={video} alt="" width='' height='' />
            <img className='icons__icon' src={menu} alt="" width='' height='' />
            <img className='icons__notification icons__icon' src={notification} alt="" width='' height='' />
            <img className='icons__icon' src={avatar} alt="" width='' height='' />
          </div>

    </header>
  )
}

export default Header;