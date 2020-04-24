import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import LineHeader from './components/line-header/LineHeader';
import Header from './components/header/Header';
import HomePage from './Pages/home/HomePage';
import Footer from './components/footer/Footer';
import ShopPage from './Pages/shop/ShopPage.jsx';
import SignInAndSignUpPage from './Pages/signIn-signUp/SignInAndSignUpPage.jsx';
import CheckoutPage from './Pages/checkout/CheckoutPage';
import OurStoresPage from './Pages/our-stores/OurStores';
import WarrantyPage from './Pages/warranty/Warranty';
import ReturnAndExchangesPage from './Pages/returns-and-exchanges/ReturnAndExchanges';
import TermsAndConditionsPage from './Pages/terms-and-conditions/TermsAndConditions';
import ContactPage from './Pages/contact/Contact';
import AboutUsPage from './Pages/about-us/AboutUsPage';

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
      // addCollectionsAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items }) ));
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App p-1">
        <LineHeader />
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? ( <Redirect to='/' /> ) : ( <SignInAndSignUpPage /> )} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/our-stores' component={OurStoresPage} />
          <Route exact path='/warranty' component={WarrantyPage} />
          <Route exact path='/return-and-exchanges' component={ReturnAndExchangesPage} />
          <Route exact path='/terms-and-conditions' component={TermsAndConditionsPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/about-us' component={AboutUsPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
