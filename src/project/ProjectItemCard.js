import React, { useState, useEffect } from 'react;'


const ProjectItemCard = () => {


    const [ itemTitleMain, setItemTitleMain ] = useState('');
    const [ itemGroupHeader, setItemGroupHeader ] = useState('');
    const [ item, setItem] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/app/member/projects`, {
            method: 'PUT',
            body: JSON.stringify({ project: { itemTitleMain: itemTitleMain, itemGroupHeader: itemGroupHeader, item: item } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((projectData) => {
            setItemTitleMain('');
            setItemGroupHeader('');
            setItem([]);
            props.fetchProjects();
        })
    }


    return (

        <div></div>

    )
}





export default ProjectItemCard;