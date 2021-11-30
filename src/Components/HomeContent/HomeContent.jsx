import './HomeContent.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// images
import left from '../../assets/img/left.png';
import right from '../../assets/img/right.png';

const HomeContent = () => {

  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50&_page=1')
    .then(res => res.json())
    .then(data => setUsers(data))

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50&_page=2')
    .then(res => res.json())
    .then(data => setUsers2(data))

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50&_page=3')
    .then(res => res.json())
    .then(data => setUsers3(data))

  }, [])

  return (
    <div className='home-content'>

  {/*==========================
  ================= first line videos
  ===================================  */}

     <div className='home-content__first-line-video first-line-video'>

      <header className='first-line-video__header'>
              <h2 className='first-line-video__title'>
                <Link to='/channel'>Dollie Blair</Link>
              </h2>
              <div className='first-line-video__btn-wrapper'>
                <Link className='first-line-video__link' to='/'>
                  <img src={left} alt="" width='28' height='28' />
                </Link> 
                <Link className='first-line-video__link' to='/'>
                  <img src={right} alt="" width='28' height='28' />
                </Link> 
              </div>
        </header>

        <main className='home-content__main main'>
          {users.length > 0 && 
          <ul className='main__list'>
            {users.map((user) => (
            <li className='main__item'>
              <Link className='main__link' to='/channel'>
                <img className='main__img' src={ user.thumbnailUrl } alt="video" />
                <h3 className='main__title'>{ user.title }</h3>
                <div className='main__video-info'>
                  <span className='main__date'>80k views  ·  3 days ago</span>
                  <span className='main__author'>Dollie Blair</span>
                </div>
              </Link>
            </li>
            ))}
          </ul>}
        </main>

  </div>

  {/*==========================
  ================= second line videos
  ===================================  */}

  <div className='home-content__first-line-video first-line-video'>

    <header className='first-line-video__header'>
          <h2 className='first-line-video__title second-title'>
            <Link to='/channel'>Recommended</Link>
          </h2>
          <div className='first-line-video__btn-wrapper'>
            <Link className='first-line-video__link' to='/'>
              <img src={left} alt="" width='28' height='28' />
            </Link> 
            <Link className='first-line-video__link' to='/'>
              <img src={right} alt="" width='28' height='28' />
            </Link> 
          </div>
    </header>

    <main className='home-content__main main'>
      {users2.length > 0 && <ul className='main__list'>
        {users2.map((user) => (
          <li className='main__item second-line-item'>
          <Link className='main__link second-line-link' to='/'>
            <img className='main__img second-line-img' src={ user.thumbnailUrl } alt="video" />
            <h3 className='main__title'>{ user.title }</h3>
            <div className='main__video-info'>
              <span className='main__date'>80k views  ·  3 days ago</span>
              <span className='main__author'>Dollie Blair</span>
            </div>
          </Link>
        </li>
        ))}
      </ul>}
      </main>

  </div>

    {/*==========================
  ================= third line videos
  ===================================  */}

  <div className='home-content__first-line-video first-line-video'>

    <header className='first-line-video__header'>
          <h2 className='first-line-video__title third-line-title'>
            <Link to='/channel'>Food & Drink</Link>
            <span className='third-line-title__small-text'>
              Recommended channel for you
            </span>
            </h2>
          <div className='first-line-video__btn-wrapper'>
            <Link className='first-line-video__link' to='/'>
              <img src={left} alt="" width='28' height='28' />
            </Link> 
            <Link className='first-line-video__link' to='/'>
              <img src={right} alt="" width='28' height='28' />
            </Link> 
          </div>
    </header>

    <main className='home-content__main main'>
      {users3.length > 0 && <ul className='main__list'>
        {users3.map((user3) => (
          <li className='main__item'>
          <Link className='main__link' to='/'>
            <img className='main__img' src={ user3.thumbnailUrl } alt="video" />
            <h3 className='main__title'>{ user3.title }</h3>
            <div className='main__video-info'>
              <span className='main__date'>80k views  ·  3 days ago</span>
              <span className='main__author'>Dollie Blair</span>
            </div>
          </Link>
        </li>
        ))}
      </ul>}
    </main>

  </div>
</div>
  )
}

export default HomeContent;