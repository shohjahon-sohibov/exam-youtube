import './App.css';
import { Switch, Route } from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import Channel from './pages/Channel/Channel'
import Error from './pages/error/error';
import PlayVideo from './pages/PlayVideo/PlayVideo';


// Conpoenents
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/channel' component={Channel} />
        <Route path='/playvideo' component={PlayVideo} />
        <Route path='*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;
