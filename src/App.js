import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import Header from './components/header/Header';
import HomePage from './Pages/home/HomePage';
import ShopPage from './Pages/shop/ShopPage.jsx';
import SignInAndSignUpPage from './Pages/signIn-signUp/SignInAndSignUpPage.jsx';

class App extends React.Component {
    constructor(){
      super();

      this.state = {
        currentUser: null
      }
    }

  // const [ currentUser, setCurrentUser ] = useState({
  //   currentUser: null
  // })

  

  // useEffect(() => {

  //   unsubcribeFromAuth = auth.onAuthStateChanged(user => {
  //     setCurrentUser({ ...currentUser, user });
  //     console.log(user);
  //   });

  //   //eslint-disable-next-line
  // }, [])

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App p-1">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/' component={ShopPage} />
          <Route exact path='/signin/' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
