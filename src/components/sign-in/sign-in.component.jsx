import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { auth , signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email,password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({ email: "", password: "" });
    }catch(error){
      console.error(error)
    }
    
  };

  handledChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handlechange={this.handledChange}
            value={this.state.email}
            required
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handlechange={this.handledChange}
            required
            label="password"
          />
          <div className = "buttons">
          <CustomButton type="submit">Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
