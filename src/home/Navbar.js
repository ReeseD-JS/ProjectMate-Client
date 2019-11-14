import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( {

    root: {
        flexGrow: 1,
    },
    title: {
        fleGrow: 1,
    },
    color: {
        backgroundColor: '#CFB53B'
    }

})

const Navbar = (props) => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <ToolBar className={classes.color}>
                    <Typography variant="h6" className={classes.title} id="navTitle">
                        Project Mate
                    </Typography>
                    <Typography variant="h6" className={classes.title} id="navTitle">
                        {props.children}
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}





export default Navbar;



{/* <Button type="button" color="inherit">
                        Login
                    </Button> */}