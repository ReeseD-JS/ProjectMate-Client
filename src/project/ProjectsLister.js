import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CreateProject from './ProjectCreate';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });


const ProjectsLister = (props) => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };


    const projectMapper = () => {

        return props.projects.map((project, index) => {

            return(
                <>
                <ListItem key={index} button>
                    <ListItemText primary={project.projectTitle} secondary={project.projectDescription}/>
                </ListItem>
                <Divider/>
                </>
            )
        })
    }


    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
        <List>
            <ListItem>
            <CreateProject/>
            </ListItem>
            {projectMapper()}    
        </List> 
        </div>
    )


    return(
<>
        <div>
            <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
            </Drawer>
        </div>
</>
        // <List component="nav" className={classes.root} aria-label="project folders">
        //     {projectMapper()}
        // </List>

    )
}






export default ProjectsLister;