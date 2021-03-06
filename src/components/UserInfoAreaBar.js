import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import FaceIcon from "@material-ui/icons/Face";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { logoutUser } from "../redux/actions/userActions";

function UserInfoAreaBar({ logoutUser, isLoggedIn, user }) {
  function onSignOut(event) {
    logoutUser();
  }

  let contents;

  if (isLoggedIn) {
    contents = (
      <>
        <Box m="auto" alignItems="center" justifyContent="center">
          <FaceIcon fontSize="large" />
        </Box>
        <Box m="auto" alignItems="center" justifyContent="center">
          <Typography variant="subtitle1">{user.email}</Typography>
        </Box>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
          </ListItemIcon>
          <ListItemText primary="Datos de perfil" />
        </ListItem>
        <ListItem button onClick={onSignOut}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
          </ListItemIcon>
          <ListItemText primary="Salir" />
        </ListItem>
      </>
    );
  } else {
    contents = (
      <>
        <ListItem button component={Link} {...{ to: "/signin" }}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
          </ListItemIcon>
          <ListItemText primary="Iniciar" />
        </ListItem>
      </>
    );
  }

  const result = (
    <>
      <ListSubheader inset>Sesi&oacute;n</ListSubheader>
      {contents}
    </>
  );

  return result;
}

function _isLoggedIn(state) {
  const obj = state.user;
  return !(Object.keys(obj).length === 0 && obj.constructor === Object);
}

function mapStateToProps(state) {
  const isLoggedIn = _isLoggedIn(state);

  return {
    isLoggedIn,
    user: state.user,
  };
}

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoAreaBar);
