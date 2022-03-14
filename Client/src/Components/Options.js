import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneDisabledIcon from '@material-ui/icons/PhoneDisabled';
import { SocketContext } from '../App/SocketContext'
import useStyles from '../Styles/styles'


const Options = ( { children } ) => {
    const classes = useStyles();
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [ idToCall, setIdToCall ] = useState('');
    return (
        <div>
            <Container className={classes.container}>
              <Paper elevation= {10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete = "off">
                   <Grid container className={classes.gridContainer}>
                      <Grid item xs = {12} md = {6} className={classes.padding}>
                        <Typography variant = "h6" gutterBottom>Account Info</Typography>
                        <TextField
                          label = "Name"
                          value = {name}
                          onChange = {(e) => setName(e.target.value)}
                          fullWidth
                          className={classes.margin_txt}
                        />
                        <CopyToClipboard text = { me }>
                           <Button variant = "contained" color = "primary" fullWidth startIcon = {<AssignmentIcon fontSize ="large" />}>
                              Copy Your ID
                           </Button>
                        </CopyToClipboard>
                      </Grid>
                      <Grid item xs = {12} md = {6} className={classes.padding}>
                        <Typography variant = "h6" gutterBottom>Make a call</Typography>
                        <TextField
                          label = "ID To Call"
                          value = {idToCall}
                          onChange = {(e) => setIdToCall(e.target.value)}
                          fullWidth
                          className={classes.margin_txt}
                        />
                        {
                            callAccepted && !callEnded ? (
                                <Button
                                  variant = "contained"
                                  color = "secondary"
                                  startIcon = {<PhoneDisabledIcon fontSize = "large" />}
                                  fullWidth
                                  onClick = {leaveCall}
                                  className = {classes.margin}
                                >Hang UP</Button>
                            ) : (
                                <Button
                                  variant = "contained"
                                  color = "primary"
                                  startIcon = {<PhoneIcon fontSize = "large" />}
                                  fullWidth
                                  onClick = {() => callUser(idToCall)}
                                >Call</Button>
                            )
                        }
                      </Grid>
                   </Grid>
                </form>
                {children}
              </Paper>
            </Container>
        </div>
    )
}

export default Options
