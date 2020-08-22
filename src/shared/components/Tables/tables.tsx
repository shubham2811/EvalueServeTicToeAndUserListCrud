import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { Button } from "../Button/button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import TablePagination from "@material-ui/core/TablePagination";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme: any) => ({
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  head: {
    backgroundColor: 'lightslategrey',
    color: theme.palette.common.white,
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
}));
export const Tables = (props) => {
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
        <Grid container>
          <Table stickyHeader>
            <TableHead >
              <TableRow >
                <TableCell className={classes.head}>Image</TableCell>
                <TableCell className={classes.head}>Name</TableCell>
                {headers.map((header: { label: ""; value: "" }) => {
                  return (
                    <TableCell className={classes.head} key={header.label}>{header.label}</TableCell>
                  );
                })}
                {renderActionButtons &&
                  renderActionButtons.map((button) => {
                    return (
                      <TableCell className={classes.head} key={button.label}>{button.label}</TableCell>
                    );
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData.map((row: any) => (
                <TableRow key={row.cell} className={classes.tableRow}>
                  <Avatar className={classes.avatar} src={row.profileUrl} />
                  <TableCell>{row.displayName}</TableCell>
                  {headers.map((header) => {
                    return (
                      <TableCell key={header.value}>
                        {row[header.value]}
                      </TableCell>
                    );
                  })}
                  {renderActionButtons &&
                    renderActionButtons.map((button) => {
                      return (
                        <TableCell key={button.label}>
                          <Button
                            color="primary"
                            onClick={() =>
                              handleActionButtonClick(row, button.label)
                            }
                          >
                            {button.image}
                            {button.label}
                          </Button>
                        </TableCell>
                      );
                    })}
                </TableRow>
              )) || []}
            </TableBody>
          </Table>
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
        </Grid>
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
