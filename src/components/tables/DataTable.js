import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DeleteForever } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function DataTable(props) {
    const handleRowDelete = (rowIndex) => props.onRowDelete(rowIndex);

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="data table">
            <TableHead>
                <TableRow>
                    {
                        props.headers.map((header) => (
                            <TableCell
                                key={header}
                            >
                                <Typography sx={{ fontSize: 20 }} variant="h4">
                                    {header}
                                </Typography>
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props.rows.map((row, index) => (
                        <TableRow
                            key={'row-' + index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>
                                <IconButton color="primary" aria-label="delete row" onClick={handleRowDelete.bind(this, index)}>
                                    <DeleteForever />
                                </IconButton>
                            </TableCell>
                            {
                                row.cells.map((cell, i) => (
                                    <TableCell 
                                        key={'cell-' + index + i}
                                        component="th" 
                                        scope="row"
                                        >
                                        {cell}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default DataTable;