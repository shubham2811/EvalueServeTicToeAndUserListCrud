import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ICardListProps from "./iCardListProps";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { InputCheckBox } from "../InputCheckBox/InputCheckBox";
const useStyles = makeStyles((theme: any) => ({
  header: {
    background: theme.palette.secondary.main,
    "& > *": {
      "& > *": {
        color: "white",
      },
    },
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  viewImage: {
    height: theme.spacing(45),
    width: "100%",
  },
}));

export const CardList = (props: ICardListProps) => {
  const classes = useStyles();
  const cardHeaderClick = (event, row) => {
    event.preventDefault();
    props.cardHeaderClick(row);
  };

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
    handleRowChecked,
  } = props;
  // console.log("props", props);
  // console.log('headers',headers)

  return (
    <>
      {rowData ? (
        <>
          {rowData.map((row: any) => {
            return (
              <Grid item lg={12} md={12} xl={12} xs={12} key={row.id}>
                <Card>
                  <Link href="#" onClick={(e) => cardHeaderClick(e, row)}>
                    <CardHeader
                      className={classes.header}
                      title={row.displayName}
                    />
                  </Link>

                  <Divider />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item>
                        <InputCheckBox
                          onChange={(e) => handleRowChecked(e, row)}
                          isformfield={false}
                        />
                      </Grid>
                      {headers.map(
                        (header: {
                          label: "";
                          value: "";
                          isLink: false;
                          linkId: null;
                        }) => {
                          return (
                            <Grid item key={header.label}>
                              <Tooltip
                                title={header.label}
                                placement="top-start"
                                arrow
                              >
                                <Typography variant="h6">
                                  {header.label}
                                </Typography>
                              </Tooltip>
                              <Tooltip
                                placement="bottom-start"
                                title={
                                  row[header.value] !== null &&
                                  row[header.value].toString()
                                }
                                arrow
                              >
                                <Typography component="p">
                                  {row[header.value] !== null
                                    ? row[header.value].toString()
                                    : null}
                                </Typography>
                              </Tooltip>
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </CardContent>
                  <Divider />
                  {renderActionButtons ? (
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
                                <Fab
                                  variant="extended"
                                  color="primary"
                                  aria-label="add"
                                  onClick={() =>
                                    handleActionButtonClick(row, button.label)
                                  }
                                >
                                  {button.image}
                                  {button.label}
                                </Fab>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </CardActions>
                    </>
                  ) : null}
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
