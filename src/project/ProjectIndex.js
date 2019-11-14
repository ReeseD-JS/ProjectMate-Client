import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProjectsLister from './ProjectsLister';
import CreateProject from './ProjectCreate';



const ProjectIndex = (props) => {

    const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
        fetch('http://localhost:3000/app/member/projects', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( (res) => res.json())
        .then((projectsData) => {
            setProjects(projectsData);
        })
    }



    useEffect(() => {
        fetchProjects();
    }, [])





    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <CreateProject fetchProjects={fetchProjects} token={props.token}/>
                <ProjectsLister projects={projects} fetchProjects={fetchProjects} token={props.token}/>
            </Container>
        </React.Fragment>
    )
}

export default ProjectIndex;