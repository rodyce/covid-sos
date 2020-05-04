import React, { useState } from "react";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import { loginUser } from "../redux/actions/userActions";

function SignInPage({ loginUser, history, ...props }) {
  const [user, setUser] = useState({ ...props.user });

  function handleSubmit(event) {
    event.preventDefault();
    loginUser(user);
    history.push("/");
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
