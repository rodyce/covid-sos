import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { mainListItems, secondaryListItems } from "./listItems";

function MainMenuOptions() {
  return (
    <>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </>
  );
}

export default MainMenuOptions;
