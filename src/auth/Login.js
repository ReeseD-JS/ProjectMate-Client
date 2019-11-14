import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
  }));


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/app/login/", {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(
            (response) => response.json()
        )
        .then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return(
        <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">
        <div>
            <Typography>Login</Typography>
                <TextField
                    required
                    id="standard-required"
                    label="Username"
                    defaultValue="Username"
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => setUsername(e.target.value)} name="username" value={username}
                />
                <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    defaultValue="Password"
                    className={classes.textField}
                    margin="normal"
                    onChange={(e) => setPassword(e.target.value)} name="password" value={password}
                />
                <Button type="submit" variant="outlined" className={classes.button}>
        Login
      </Button>
        </div>
        </form>


        //     <Form onSubmit={handleSubmit}>
        //         <FormGroup>
        //             <Label htmlFor="username">Username</Label>
        //             <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
        //         </FormGroup>
        //         <FormGroup>
        //             <Label htmlFor="password">Password</Label>
        //             <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
        //         </FormGroup>
        //         <Button type="submit">Login</Button>
        //     </Form>
        // </div>
    )
}

export default Login;