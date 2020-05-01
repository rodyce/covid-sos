import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const CollectionCenterStats = ({
  name,
  address,
  donations,
  requests,
  deliveries,
  shipments,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0}>
        <Grid item lg={11}>
          <Title>{name}</Title>
        </Grid>
        <Grid item lg={1}>
          <Typography variant="subtitle1">...</Typography>
        </Grid>
        <Grid item lg={12}>
          <Typography color="textSecondary" className={classes.depositContext}>
            {address}
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography component="p">Donaciones:</Typography>
        </Grid>
        <Grid item lg={2}>
          <Typography component="p">{donations}</Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography component="p">Peticiones:</Typography>
        </Grid>
        <Grid item lg={2}>
          <Typography component="p">{requests}</Typography>
        </Grid>

        <Grid item lg={4}>
          <Typography component="p">Entregas:</Typography>
        </Grid>
        <Grid item lg={2}>
          <Typography component="p">{deliveries}</Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography component="p">Env&iacute;os:</Typography>
        </Grid>
        <Grid item lg={2}>
          <Typography component="p">{shipments}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

CollectionCenterStats.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  donations: PropTypes.number.isRequired,
  requests: PropTypes.number.isRequired,
  deliveries: PropTypes.number.isRequired,
  shipments: PropTypes.number.isRequired,
};

export default CollectionCenterStats;
