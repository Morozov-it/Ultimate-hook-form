//основное
import React from 'react';
//файлы библиотек
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { Table, TableCell, TableRow } from '@material-ui/core';


export const MyTable = ({entries, ...props }) => {
    return (
        <TableContainer {...props}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                        Field
                        </TableCell>
                        <TableCell align='right'>
                        Value
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map((entry) =>
                        <TableRow key={entry[0]}>
                            <TableCell>
                                {entry[0]}
                            </TableCell>
                            <TableCell align='right'>
                                {entry[1].toString()}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
