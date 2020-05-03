import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CollectionCenterStats from "./CollectionCenterStats";
import PropTypes from "prop-types";

function CollectionCenterList({ fixedHeightPaper }) {
  return (
    <Grid container spacing={3}>
      {/* Collection center stats */}
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <CollectionCenterStats
            name="Centro de acopio Tilar&aacute;n"
            address="Guanacaste, Tilar&aacute;n"
            donations={3}
            requests={6}
            deliveries={19}
            shipments={67}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

CollectionCenterStats.propTypes = {
  fixedHeightPaper: PropTypes.object.isRequired,
};

export default CollectionCenterList;
