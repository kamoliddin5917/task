import "./Table.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 570,
  },
  body: {
    background: "#3F51B5",
  },
  color: {
    color: "#fff",
  },
  herader: {
    color: "red",
    background: "gold",
    fontWeight: "bold",
  },
});

const DenseTable = ({ rows }) => {
  const classes = useStyles();

  return (
    <div className="box">
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.herader}>№</TableCell>
              <TableCell className={classes.herader}>Name</TableCell>
              <TableCell className={classes.herader} align="right">
                Manufacturer
              </TableCell>
              <TableCell className={classes.herader} align="right">
                Supplier
              </TableCell>
              <TableCell className={classes.herader} align="right">
                Last update time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.body}>
            {rows.map((row, i) => (
              <TableRow key={row.id}>
                <TableCell className={classes.color} component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell className={classes.color} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.color} align="right">
                  {row.productProperties.length > 0 &&
                  row.productProperties[0].value
                    ? row.productProperties[0].value
                    : "УЗБ"}
                </TableCell>
                <TableCell className={classes.color} align="right">
                  {row.supplier ? row.supplier : ""}
                </TableCell>
                <TableCell className={classes.color} align="right">
                  {row.lastUpdateTime}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default DenseTable;
