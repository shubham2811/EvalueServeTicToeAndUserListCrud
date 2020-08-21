import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
export const TicTacWrapper = (props) => {
  return (
    <Card>
      <CardHeader
        subheader="The information of logged in user"
        title="Profile"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={1}></Grid>
      </CardContent>
      <Divider />
    </Card>
  );
};
