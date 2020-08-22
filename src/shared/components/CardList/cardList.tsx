import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ICardListProps from "./iCardListProps";
import { makeStyles } from "@material-ui/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "../Button/button";
const useStyles = makeStyles((theme: any) => ({
  // header: {
  //   background: theme.palette.secondary.main,
  //   "& > *": {
  //     "& > *": {
  //       color: "white",
  //     },
  //   },
  // },
  avatar: {
    width: "50px",
    height: "50px",
  },
  // icon: {
  //   display: "flex",
  //   alignItems: "center",
  //   marginRight: theme.spacing(1),
  // },
  // viewImage: {
  //   height: theme.spacing(45),
  //   width: "100%",
  // },
}));

export const CardList = (props: ICardListProps) => {
  const classes = useStyles();
  const {
    headers,
    rowData,
    handleChangePage,
    handleChangeRowsPerPage,
    pageNumber,
    rowsPerPage,
    count,
    renderActionButtons,
    handleActionButtonClick,
  } = props;

  return (
    <>
      {rowData && rowData.length ? (
        <>
          {rowData.map((row: any) => {
            return (
              <Grid item md={6} key={row.cell} >
                <Card>
                  <CardContent>
                    <Grid
                      container
                      spacing={1}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item md={3}>
                        <Avatar
                          className={classes.avatar}
                          src={row.profileUrl}
                        />
                      </Grid>
                      <Grid item md={8}>
                        <Typography variant="h4" component="h4">
                          {row.displayName}
                        </Typography>
                      </Grid>
                      <Grid container spacing={1}>
                        {headers.map((header) => {
                          return (
                            <Grid item md={6}  key={header.label} >
                              <Grid container>
                                <Typography
                                  style={{ fontSize: "13px" }}
                                  variant="body2"
                                  color="textSecondary"
                                  component="h5"
                                  noWrap
                                >
                                  {header.label} :
                                </Typography>

                                <Tooltip
                                  title={row[header.value].toString()}
                                  placement="top-start"
                                  arrow
                                >
                                  <Typography
                                    style={{ fontSize: "11px" }}
                                    variant="body2"
                                    color="textSecondary"
                                    component="h5"
                                    noWrap
                                  >
                                    {row[header.value].toString()}
                                  </Typography>
                                </Tooltip>
                              </Grid>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  {renderActionButtons && (
                    <>
                      <CardActions>
                        <Grid
                          container
                          spacing={2}
                          justify="center"
                          alignItems="center"
                        >
                          {renderActionButtons.map((button) => {
                            return (
                              <Grid item key={button.label}>
                                <Button
                                  color="primary"
                                  onClick={() =>
                                    handleActionButtonClick(row, button.label)
                                  }
                                >
                                  {button.image}
                                  {button.label}
                                </Button>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </CardActions>
                      </>
                  )}
                </Card>
              </Grid>
            );
          })}
          <Grid item md={12} xs={12}>
            <TablePagination
              rowsPerPageOptions={[10, 50, 100]}
              component="div"
              count={count || 0}
              rowsPerPage={rowsPerPage || 10}
              page={pageNumber || 0}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Grid>
        </>
      ) : (
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography noWrap variant="h5">
            No Records Found
          </Typography>
        </Grid>
      )}
    </>
  );
};
