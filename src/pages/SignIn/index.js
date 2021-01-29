import React, { useState } from 'react';

import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {useNavigate} from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch } from 'react-redux';


import {signIn} from '../../actions/accountActions';

const useStyles = makeStyles((theme) =>({
    root:{
        display: 'flex',
        height: '100vh',

    },
    image:{
        backgroundImage: 'url(/images/background.jpeg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    avatar:{
        marginBottom: theme.spacing(1),
        background: theme.palette.primary.main,
    },
    
    button:{
        marginTop: theme.spacing(1)
    },
    
    form:{
        margin: theme.spacing(2,4)
    },
    box: {
        backgroundColor: 'rgb(48,48,48)',

    }

}));

function Copyright(){
    return (
        <Typography variant = 'body2' align= 'center'>
            {'Copyright ©'}
            <a color = 'inherit' href = 'https://www.linkedin.com/in/julio-trevisan-centanin-21997314a/' >
                Júlio Trevisan Centanin
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}



function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();



    async function handleSignIn() {
        //chamada a api
        // se retorno ok, direciona para home
        // se não exibe mensagem para o usuario

        try { 
            await dispatch(signIn(email, password));
            navigate("/");
        } catch (error){
            setErrorMessage(error.response.data.message)
        }
    }
    
    return(
        <Grid className = {classes.root}>
            <Grid 
            item 
            container
            direction = 'column'
            justify = 'space-around'
            alignItems = 'center'
            md = {7}
            className= {classes.image}>
                <Box >
                    <Typography  style={{color: 'rgb(255,255,255)', fontSize:35, lineHeight: '45px'}}>
                        <strong> Simplificando a forma de conectar pessoas ! </strong>
                    </Typography>
                 </Box>
                 <Box >
                    <Typography display="inline" variant= 'body2' style={{color: 'rgb(255,255,255, 0.9)',marginTop: 30,fontSize:15, lineHeight: '30px'}}>
                    <strong>Compartilhe momentos com toda nossa rede. </strong>
                    </Typography>
                 </Box>
            </Grid>
            <Grid item md = {5}>
                <Box display = 'flex' flexDirection = 'column' alignItems = 'center' mt = {8}>
                    <Avatar className = {classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant = 'h5'>Acesso</Typography>
                    <form className = {classes.form}>
                        <TextField
                        variant = 'outlined'
                        margin = 'normal'
                        required
                        fullWidth
                        id = 'email'
                        label = 'E-mail'
                        name = 'email'
                        autoComplete = 'email'
                        autoFocus
                        value = {email}
                        onChange = {(event) => setEmail(event.target.value)}
                        />
                        <TextField
                        variant = "outlined"
                        margin = "normal"
                        required
                        fullWidth
                        name = "password"
                        label = "Senha"
                        type = "password"
                        id = "password"
                        autoComplete = "current-password"
                        value = {password}
                        onChange = {(event) => setPassword(event.target.value)}
                        />
                        <Button
                        fullWidth
                        variant = 'contained'
                        color = 'primary'
                        className = {classes.button}
                        onClick = {handleSignIn}>
                        Entrar
                        </Button>
                        {
                            errorMessage &&
                            <FormHelperText error>
                                {errorMessage}
                            </FormHelperText>

                        }
                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta ? Registre-se</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
    
}

export default SignIn;