import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 1,
        padding: `${theme.spacing.unit * 1}px 0`,
    }
});

function Footer(props) {
    const { classes } = props;

    return (
        <footer className={classes.footer}>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h8" component="h3" align='center'>
                   Data Source Provided By
                &nbsp;|&nbsp;<a href rel="noopener noreferrer">Covid19 India</a>
                &nbsp;|&nbsp;<a href rel="noopener noreferrer">COVID-19 API</a>
                {/* &nbsp;|&nbsp;Powered by <a href rel="noopener noreferrer">Palani Kumar A</a> */}
        </Typography>                
               
            </Paper>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);