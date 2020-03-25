import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import Header from './components/header/Header';
import HomePage from './Pages/home/HomePage';
import ShopPage from './Pages/shop/ShopPage.jsx';
import SignInAndSignUpPage from './Pages/signIn-signUp/SignInAndSignUpPage.jsx';

class App extends React.Component {

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

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })
      }

      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App p-1">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : ( <SignInAndSignUpPage /> )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
