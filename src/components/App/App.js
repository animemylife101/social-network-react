import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

// import News from '../../page/News/News';
import Home from '../../page/Home/Home';
import Profile from '../../page/Profile/Profile';
import NotFound from '../../page/NotFound/NotFound';
import Login from '../../page/Login/Login';

import './App.css';
import NewsContainer from '../../containers/NewsContainer';
import ProfileContainer from '../../containers/ProfileContainer';
import LoginContainer from '../../containers/LoginContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/news' component={NewsContainer} />
            <Route path='/profile' component={ProfileContainer} />
            <Route path='/login' component={LoginContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
