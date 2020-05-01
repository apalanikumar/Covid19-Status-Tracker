import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { FormRow,TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, makeStyles } from '@material-ui/core';
//import Table from 'react-bootstrap/Table'
import CountUp from 'react-countup';

import './Cards.css';
import Delta from '../Delta/Delta';

const Cards = ({ data, value, index }) => {
    if (value !== index) return null;

    const { confirmed, recovered, deaths, lastUpdate, deltaconfirmed, deltadeaths, deltarecovered }
        = (data && index === 1 && data.totData) ? data.totData[0] : data;

    if (!confirmed) {
        return (<Typography variant="button" display="block" align='center'>
            Loading...
        </Typography>);
    }

    const lastUpdated = index === 2 ? (<Typography variant="caption" display="block" align='center'>
        Last Updated at {new Date(lastUpdate).toLocaleString()}
    </Typography>) : null;
    return (
        <div className="card-container">
            {lastUpdated}
            <Grid container spacing={3} justify="center">
            <TableRow align="center" selected="" >
                <TableCell align="center" colSpan={5} >
                    <Typography color="textSecondary" gutterBottom className="card-card card-infected">Confirmed</Typography>
                    <Typography variant="h5" className="card-curdata">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                    </Typography>
                    {deltaconfirmed > 0 ? <Delta inpCnt={deltaconfirmed} color='red' size='med' /> : null}
                </TableCell>
                <TableCell align="center" colSpan={5}>
                    <Typography color="textSecondary" gutterBottom className="card-card card-recovered">Recovered</Typography>
                    <Typography variant="h5" className="card-curdata">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                    </Typography>
                    {deltarecovered > 0 ? <Delta inpCnt={deltarecovered} color='green' size='med' /> : null}
                </TableCell>
                <TableCell align="center" colSpan={5}>
                    <Typography color="textSecondary" gutterBottom className="card-card card-deaths">Deaths</Typography>
                    <Typography variant="h5" className="card-curdata">
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                    </Typography>
                    {deltadeaths > 0 ? <Delta inpCnt={deltadeaths} color='grey' size='med' /> : null}
                </TableCell>
            </TableRow>
            </Grid>           
        </div>
    );
}

export default Cards;