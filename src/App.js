import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from './components/pages/sing-in&sing-up/sign-in&sign-up.component';
import CheckoutPage from './components/pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot  => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return  (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})

const mapDispatchtoProps = dispach =>({
  setCurrentUser: user => dispach(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
