import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: 220,
        margin: 5

    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});
const Smurf = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color='textSecondary'
                    gutterBottom
                >
                    {props.smurf.name}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                    {props.smurf.age}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                    {props.smurf.height}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Edit</Button>
            </CardActions>
        </Card>
    );
};

export default Smurf;
