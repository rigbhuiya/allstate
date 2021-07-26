import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.allstate.com/">
        Allstate
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [userRegister, setUserRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: ""
  })

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value });
  };

  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {

    e.preventDefault();

    const newRecord = { ...userRegister, id: new Date().getTime().toString() };

    setRecords([...records, newRecord]);

    setUserRegister({ fname: "", lname: "", email: "", password: "", cpassword: "" })

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                // onChange={handleInput}
                onChange={e => { setUserRegister({ ...userRegister, fname: e.target.value }) }}
                value={userRegister.fname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                onChange={e => { setUserRegister({ ...userRegister, lname: e.target.value }) }}
                value={userRegister.lname}
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                onChange={e => { setUserRegister({ ...userRegister, email: e.target.value }) }}
                value={userRegister.email}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                onChange={e => { setUserRegister({ ...userRegister, password: e.target.value }) }}
                value={userRegister.password}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                onChange={e => { setUserRegister({ ...userRegister, cpassword: e.target.value }) }}
                value={userRegister.cpassword}
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to stay updated for best offers via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        <div>
          {
            records.map((cur) => {
              const {id,fname,lname,email,password,cpassword}=cur;
              return (
                <div key={id}>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">{fname}</li>
                    <li class="list-group-item">{lname}</li>
                    <li class="list-group-item">{email}</li>
                    <li class="list-group-item">{password}</li>
                    <li class="list-group-item">{cpassword}</li>
                  </ul>
                  
                </div>
              )
            }
            )
          }
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}