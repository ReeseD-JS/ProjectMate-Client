import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));


const CreateProject = (props) => {

    const classes = useStyles();

    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        };

    const handleClose = () => {
        setOpen(false);
        };


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/app/member/projects', {
            method: 'POST',
            body: JSON.stringify({ project: { projectTitle: projectTitle, projectDescription: projectDescription } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((projectData) => {
            setProjectTitle('');
            setProjectDescription('');
            props.fetchProjects();
            handleClose();
        })
    }




    return(
        <div>
        <AddCircleOutlineIcon type="button" onClick={handleOpen}/>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          <div className={classes.paper}>
          <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">
        <div>
            <Typography>Project Title</Typography>
                <TextField
                    required
                    id="standard-required"
                    label="New Project Title"
                    defaultValue="New Project Title"
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => setProjectTitle(e.target.value)} name="projectTitle" value={projectTitle}
                />
        </div>
        <div>
            <Typography>Project Description</Typography>
                <TextField
                    optional
                    id="standard-required"
                    label="Description"
                    defaultValue="Description"
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => setProjectDescription(e.target.value)} name="projectDescription" value={projectDescription}
                />
            <Button type="submit" variant="outlined" className={classes.button} onClick={handleSubmit}>
                Create Project
            </Button>
        </div>
        </form>
          </div>
      </Modal>
    </div>




    )
}




export default CreateProject;