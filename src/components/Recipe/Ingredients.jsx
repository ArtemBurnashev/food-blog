import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#131d29',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export function Ingredients({recipe={}}) {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="ingredient table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left">Ingredients</StyledTableCell>
            <StyledTableCell align="left">Measure</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(recipe).map((key) => {

            if (key.includes('Ingredient') && recipe[key]){
                return (
                    <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row" align="left">
                    {recipe[key]}
              </StyledTableCell>
              <StyledTableCell align="left">
                  {
                      recipe[`strMeasure${key.slice(
                          13
                      )}`]
                  }
              </StyledTableCell>
            </StyledTableRow>
                );
            }

            return null;
          
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
