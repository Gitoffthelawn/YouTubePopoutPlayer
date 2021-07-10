import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function TabPanelHeader({ title, icon = null }) {
  return (
    <Grid
      container
      wrap="nowrap"
      spacing={1}
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      {icon && <Grid item>{icon}</Grid>}
      <Grid item xs zeroMinWidth>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}

TabPanelHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
};
