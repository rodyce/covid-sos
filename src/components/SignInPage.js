import React, { useState } from "react";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import { loginUser } from "../redux/actions/userActions";

function SignInPage(props) {
  const [user, setUser] = useState({ ...props.user });

  function handleSubmit(event) {
    event.preventDefault();
    const { email } = user;
    console.log(email);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(`name: ${name}, value: ${value}`);
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  return (
    <SignInForm user={user} onChange={handleChange} onSubmit={handleSubmit} />
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
