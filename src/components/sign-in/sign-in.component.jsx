import React from 'react';

import './sign-in.stylesheet.scss'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
   constructor(props){
      super(props);

      this.state ={
         email: '',
         password: ''
      }

   }

   handleSubmit = async event => {
      event.preventDefault();

      const { email, password } = this.state;

      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({ email: '', password: '' })
      }catch (error){
         console.log(error);
      }
   }

   handleChange = event => {
      const { value, name} = event.target;

      this.setState({ [name]: value })
   }

   render(){
      return(
         <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput 
                  name="email" 
                  type="email" 
                  label="email"
                  value={this.state.email}
                  handleChange={this.handleChange}
                  required
               />
               <FormInput 
                  name="password" 
                  type="password" 
                  label="password"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  required
               />
               <div className="buttons">
                  <Button type="submit">SIGN IN</Button>
                  <Button onClick= {signInWithGoogle} isGoogleSignIn type="submit">SIGN IN WITH GOOGLE</Button>
               </div>
            </form>
         </div>

      )
   }
}

export default SignIn;