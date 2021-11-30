import './Channel.scss'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// compoenents
import Sidebar from '../../Components/Sidebar/Sidebar';

// img
import cover from '../../assets/img/channel-cover-img.png';
import avatar from '../../assets/img/girl-avatar.png';
import search from '../../assets/img/search.png'

const Channel = () => {
  const index = [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519]

  const [users4, sertUser4] = useState([]);
  const [users5, sertUser5] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=1&_page=4')
    .then(res => res.json())
    .then(data => sertUser4(data))  

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50&_page=4')
    .then(res => res.json())
    .then(data => sertUser5(data))  
  }, [])
  return (
   <>

<div className='channel'>
      <Sidebar />

      <div className='channel__content'>

        <header className='channel__header header'>
          <div className='cover-img-wapper'>
            <img className='header__cover-img' src={cover} alt="channel cover background" />
          </div>

          <div className='header__nav'>

            <div className='header__user'>
            
              <img className='header__avatar' src={avatar} alt="avatar" width='80' height='80' />
              
              <div className='header__user-data'>
                <h2 className='header__name'>Margaret Phelps</h2>
                <span className='header__subscriber'>245K subscribed</span>
              </div>
          
            </div>

            <div className='header__subscribe'>
              <span className='header__subscribe-text'>Subscribe 2.3m</span>
            </div>

          </div>

          <div className="header__nav-wrapper nav-wrapper">
            <nav className="nav-wrapper__nav">
              <ul className="nav-wrapper__list">

                <li className="nav-wrapper__item">
                  <Link className="nav-wrapper__link" to='*'>Home</Link>
                </li>

                <li className="nav-wrapper__item">
                  <Link className="nav-wrapper__link" to='*'>Videos</Link>
                </li>

                <li className="nav-wrapper__item">
                  <Link className="nav-wrapper__link" to='*'>Playlists</Link>
                </li>

                <li className="nav-wrapper__item">
                  <Link className="nav-wrapper__link" to='*'>Channels</Link>
                </li>

                <li className="nav-wrapper__item">
                  <Link className="nav-wrapper__link" to='*'>Discussion</Link>
                </li>

                <li className="nav-wrapper__item">
                  <Link className="nav-wrapper__link" to='*'>About</Link>
                </li>

                <li className="nav-wrapper__search-item">
                    <img className='nav-wrapper__img' src={search} alt="" width='18' height='18' />
                </li>

              </ul>
            </nav>
          </div>

        </header>

        <main className="channel-main">
          <div className="main__top main-top">
            {users4.length > 0 && <ul className="main-top__list">
             {users4.map((user) => (
               <Link key={user.title} className="main-top__link" to='/playvideo'>
                <li  className="main-top__item">
                  <img className='main-top__img' src={ user.thumbnailUrl } alt="video" />
                  <div>
                    <h3 className='main-top__title'>{ user.title }</h3>
                    <div className='main-top__video-info'>
                      <span className='main-top__date'>80k views  ·  3 days ago</span>
                      <span className='main-top__author'>Dollie Blair</span>
                    </div>
                  </div>
                </li>
              </Link>
             ))}
            </ul>}

            <ul className="main-top__user-list">
              <li className="main-top__user-title-item">
                <h3 className="main-top__user-title">Recommended channel</h3>
              </li>

              <li className="main-top__user-item">
                <Link className="main-top__user-link" to='/channel'>
                  <img className="main-top__user-img" src={avatar} alt="avatar" width='50' height='50' />
                    <h4 className="main-top__user-name">Flora Benson</h4>
                </Link>
              </li>

              <li className="main-top__user-item">
                <Link className="main-top__user-link" to='/channel'>
                  <img className="main-top__user-img" src={avatar} alt="avatar" width='50' height='50' />
                    <h4 className="main-top__user-name">Flora Benson</h4>
                </Link>
              </li>

              <li className="main-top__user-item">
                <Link className="main-top__user-link" to='/channel'>
                  <img className="main-top__user-img" src={avatar} alt="avatar" width='50' height='50' />
                    <h4 className="main-top__user-name">Flora Benson</h4>
                </Link>
              </li>

            </ul>
          </div>

        <div className='main__slider slider'>
          <h3 className='slider__title'>Margaret Phelps videos</h3>

          {users5.length > 0 && <ul className="slider__list">
            {users5.map((user) => (
              <li key={user.title} className="slider__item">
              <Link className='slider__link' to='/playvideo'>
                <img className='slider__img' src={ user.thumbnailUrl } alt="video" />
                <h3 className='slider__video-title'>{ user.title }</h3>
                <div className='slider__video-info'>
                  <span className='slider__date'>80k views  ·  3 days ago</span>
                  <span className='slider__author'>Dollie Blair</span>
                </div>
              </Link>
            </li>
            ))}
          </ul>}
        </div>
        </main>
      </div>
    </div>

   </>
  )
}

export default Channel;