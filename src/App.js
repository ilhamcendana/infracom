import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Loadable from 'react-loadable';
import React, { useEffect, useState } from 'react';

//global components
import Navbar from 'components/Navbar';

//global utils
import { checkAuth } from 'utils/utils';

const Login = Loadable({
  loader: () => import('./views/Login'),
  loading() {
    return <div />
  }
});
const Home = Loadable({
  loader: () => import('./views/Home'),
  loading() {
    return <div />
  }
});
const Profile = Loadable({
  loader: () => import('./views/Profile'),
  loading() {
    return <div />
  }
});

function App() {
  const [isAuth, isAuthSet] = useState(false);  

  useEffect(() => {    
    isAuthSet(checkAuth());
  }, [])
  return (
    <div className="App">
      <Switch>
        {!isAuth ?
          <Route exact path='/'>
            <Login />
          </Route> :
          <React.Fragment>
            <Navbar />
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
          </React.Fragment>
        }
      </Switch>
    </div>
  );
}

export default App;
