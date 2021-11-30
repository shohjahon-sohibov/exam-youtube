import './Sidebar.scss';
import { Link } from 'react-router-dom';

// icons
import homeIcon from '../../assets/img/home-icon.png'
import trending from '../../assets/img/trending.png'
import subscribtion from '../../assets/img/subscribtion.png'
import library from '../../assets/img/library.png'
import history from '../../assets/img/history.png'
import watchLater from '../../assets/img/watch-later.png'
import favourites from '../../assets/img/favourites.png'
import likedVideos from '../../assets/img/liked-videos.png'
import music from '../../assets/img/music.png'
import games from '../../assets/img/games.png'
import dropDown from '../../assets/img/dropdown.png'

// images
import avatar from '../../assets/img/sidebar-avatar.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>

    <ul className='sidebar__list list'>
      <li className='list__item'>
        <ul className='list__inside-list inside-list'>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={homeIcon} alt="home" width='20' height='19' />
            <Link className='inside-list__link current' to='/'>Home</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={trending} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>Trending</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={subscribtion} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>Subscriptions</Link>
          </li>
        

        </ul>
      </li>

      <li className='list__item'>
        <ul className='list__inside-list inside-list'>

        <li className='inside-list__item'>
            <img className='inside-list__img' src={library} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>Library</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={history} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>History</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={watchLater} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>Watch later</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={favourites} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>Favourites</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={likedVideos} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>videos</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={music} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>Music</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={games} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>Games</Link>
          </li>

          <li className='inside-list__item'>
            <img className='inside-list__img' src={dropDown} alt="home" width='20' height='19' />
            <Link className='inside-list__link' to='*'>Show more</Link>
          </li>

          <li className='list__item'>
            <h2 className='list__title'>Subscriptions</h2>
            <ul className='list__inside-list inside-list'>

              <li className='inside-list__item'>
                <img className='inside-list__img' src={avatar} alt="home" width='20' height='19' />
                <Link className='inside-list__link' to='/channel'>Gussie Singleton</Link>
              </li>
              
              <li className='inside-list__item'>
                <img className='inside-list__img' src={avatar} alt="home" width='20' height='19' />
                <Link className='inside-list__link' to='/channel'>Gussie Singleton</Link>
              </li>

              <li className='inside-list__item'>
                <img className='inside-list__img' src={avatar} alt="home" width='20' height='19' />
                <Link className='inside-list__link' to='/channel'>Gussie Singleton</Link>
              </li>
              
              <li className='inside-list__item'>
                <img className='inside-list__img' src={avatar} alt="home" width='20' height='19' />
                <Link className='inside-list__link' to='/channel'>Gussie Singleton</Link>
              </li>
              
              <li className='inside-list__item'>
                <img className='inside-list__img' src={avatar} alt="home" width='20' height='19' />
                <Link className='inside-list__link' to='/channel'>Gussie Singleton</Link>
              </li>

              <li className='inside-list__item'>
                <img className='inside-list__img' src={avatar} alt="home" width='20' height='19' />
                <Link className='inside-list__link' to='/channel'>Gussie Singleton</Link>
              </li>

              <li className='inside-list__item last-item'>
                <img className='inside-list__img' src={avatar} alt="home" width='20' height='19' />
                <Link className='inside-list__link' to='*'>Setting</Link>
              </li>

            </ul>
          </li>

        </ul>
      </li>


    </ul>

    </div>
  )
}

export default Sidebar;