import React from "react";
import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";

function SignInForm({ user, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <InputLabel htmlFor="my-input">Correo electr&oacute;nico</InputLabel>
        <Input
          id="my-input"
          name="email"
          onChange={onChange}
          aria-describedby="my-helper-text"
        />
        <FormHelperText id="my-helper-text">
          No compartiremos tu email.
        </FormHelperText>
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Aceptar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          {...{ to: "/" }}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}

export default SignInForm;
