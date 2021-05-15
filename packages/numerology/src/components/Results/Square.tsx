import React from "react";
import _uniq from 'lodash/uniq';
import {Table, TableBody, TableCell, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export interface ISquare {
    square?: string[][],
    master?: string[][],
    unbold?: boolean;
}

const Square = ({square, master, unbold}: ISquare) => {
    const classes = makeStyles({
        root: {maxWidth: 200}
    })()
    const showNum = (el: string, irow: number, iel: number) => {
        return !unbold && el === uniq(irow, iel);
    }

    const uniq = (irow: number, iel: number) => {
        return square && _uniq(square[irow][iel].split('')).shift();
    }

    return (
        <React.Fragment>
            {master && <Table size="small" classes={classes}>
                <TableBody>
                    {
                        master.map((row, irow) =>
                            <TableRow key={irow}>
                                {row.map((el, iel) =>
                                    <TableCell key={iel} align="center">{showNum(el, irow, iel) ? el : <>&nbsp;</>}</TableCell>)}
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>}
        </React.Fragment>
    );
}

export default Square;