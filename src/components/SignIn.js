import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

function SignIn() {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Correo electr&oacute;nico</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">
        No compartiremos tu email.
      </FormHelperText>
    </FormControl>
  );
}

export default SignIn;
