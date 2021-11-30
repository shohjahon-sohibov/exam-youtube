import './PlayVideo.scss'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// images
import logo from '../../assets/img/channel-logo.png'
import myImage from '../../assets/img/my-image.jpg'

const PlayVideo = () => {
  const [users1, setUsers] = useState([])

  useEffect(() => (
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50&_page=1')
    .then(res => res.json())
    .then(data => setUsers(data))
  ), []);

  return (
    <div className='play-video'>
      <div className="container play-video__container">
        <section className='play-video__inside-container-wrapper'>
        <section className='play-video__wrapper'>
        <header className="play-video__header header">
          <div className="header__video">
          <iframe className='header__iframe' width="950" height="500" src="https://www.youtube.com/embed/ySpE18uF5q0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </header>

        <main className="play-video__main main">
            <div className="main__video-info">
              <Link className='main__logo-link' to='/channel'>
                <img className='main__logo-img' src={logo} alt="logo" width='80' height='80' />
              </Link>

              <div className='main__video-text'>
                <h3 className='main__title'>Food & Drink</h3>
                <p className='main__date'>Published on 14 Jun 2019</p>
                <p className='main__data'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>

                <span className='main__button'>Show more</span>

              </div>
            </div>

            <div className="main__subscribe">
              <button className='main__btn-subscribe'>Subscribe 2.3m</button>
            </div>
          </main>

          <div className="comment">
            <img className='comment__avatar' src={myImage} alt="man on a board" width='40' height='40' />
           <div>
             <h3 className='comment__title'>Shohjahon Sohibov</h3>
             <p className='comment__text'>That is the best video l've ever seen belissimo.</p>
           </div>
          </div>
      </section>

      <aside className='play-video__aside aside'>
      {users1.length > 0 && <ul className="aside__list">
            {users1.map((user) => (
              <Link className="aside__link" to='/playvideo'>
                <li className="aside__item">
                  <img className='aside__img' src={ user.thumbnailUrl } alt="video" />
                  <div>
                    <h3 className='aside__title'>{ user.title }</h3>
                    <div className='aside__video-info'>
                      <span className='aside__date'>80k views  ·  3 days ago</span>
                      <span className='aside__author'>Dollie Blair</span>
                    </div>
                  </div>
                </li>
              </Link>
             ))}
            </ul>}    
      </aside>
        </section>
      </div>
    </div>
  )
}

export default PlayVideo;