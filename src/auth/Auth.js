import React from 'react';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Signup from './Signup';
import Login from './Login';



const Auth = (props) => {
    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            <Signup updateToken={props.updateToken}/>
            <Login updateToken={props.updateToken}/>
            </Container>
        </React.Fragment>
    )
}





export default Auth;


// <Container className="auth-container">
        //     <Row>
        //         <Col md="6">
        //             <Signup updateToken={props.updateToken}/>
        //         </Col>
        //         <Col md="6" className="login-col">
        //             <Login updateToken={props.updateToken}/>
        //         </Col>
        //     </Row>
        // </Container>