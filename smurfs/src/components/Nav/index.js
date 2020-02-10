import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DispatchContext, SmurfContext } from '../../contexts';
import axios from 'axios';
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

const Nav = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const { dispatch } = useContext(DispatchContext);
    const { state } = useContext(SmurfContext);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeHandler = e => {
        if (e.target.name === 'name') {
            dispatch({ type: 'SET_NAME', payload: e.target.value });
        } else if (e.target.name === 'age') {
            dispatch({ type: 'SET_AGE', payload: e.target.value });
        } else {
            dispatch({ type: 'SET_HEIGHT', payload: e.target.value });
        }
    };

    const newSmurfAdd = (e, smurf) => {
        axios
        .post('http://localhost:3333/smurfs', state.newSmurf)
        .then(res => {
            // dispatch({ type: 'FETCH_DATA', payload: res.data });
            console.log(res.data);
        })
        .catch(err => console.log(err));
    };

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <AddIcon onClick={handleOpen} />
                        <Modal
                            aria-labelledby='simple-modal-title'
                            aria-describedby='simple-modal-description'
                            open={open}
                            onClose={handleClose}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <h2 id='simple-modal-title'>Add a Smurf!</h2>
                                <form
                                    className={classes.root}
                                    noValidate
                                    autoComplete='off'
                                >
                                    <TextField
                                        onChange={e => changeHandler(e)}
                                        id='standard-basic'
                                        label='Name'
                                        name='name'
                                        value={state.newSmurf.name}
                                    />
                                    <br />
                                    <TextField
                                        onChange={e => changeHandler(e)}
                                        id='standard-basic'
                                        label='Age'
                                        name='age'
                                        value={state.newSmurf.age}
                                    />
                                    <br />
                                    <TextField
                                        onChange={e => changeHandler(e)}
                                        id='standard-basic'
                                        label='Height'
                                        placeholder='Height'
                                        name='height'
                                        value={state.newSmurf.height}
                                    />
                                    <br />
                                    <Button variant='contained' color='primary'>
                                        Add!
                                    </Button>
                                </form>
                            </div>
                        </Modal>
                    </IconButton>
                    <Typography variant='h6' color='inherit'>
                        Smurfs
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Nav;
