import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SettingsIcon from "@material-ui/icons/Settings";
import ReceiptIcon from "@material-ui/icons/Receipt";

export const mainListItems = (
  <div>
    <ListSubheader inset>Centro de Acopio</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Tablero" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Recibir mercader&iacute;a" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalShippingIcon />
      </ListItemIcon>
      <ListItemText primary="Despachar ayuda" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
      <ListItemText primary="Asignar transportista" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Administrar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Ver solicitudes" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Transportista</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Aceptar pedido" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon />
      </ListItemIcon>
      <ListItemText primary="Registrar entrega" />
    </ListItem>
  </div>
);
