import './Home.scss';

import Sidebar from '../../Components/Sidebar/Sidebar';
import HomeContent from '../../Components/HomeContent/HomeContent';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <HomeContent />
    </div>
  )
}

export default Home;