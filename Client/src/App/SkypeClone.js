import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import VideoPlayer from '../Components/VideoPlayer'
import Notifications from '../Components/Notifications'
import Options from '../Components/Options'
import useStyles from '../Styles/styles'

const SkypeClone = () => {
    const classes = useStyles();
    return (
        <div className = "skype">
            <div className = "skype__main">
                <div className = {classes.wrapper}>
                  <AppBar position = "static" color = "inherit" className = {classes.appBar}>
                    <Typography variant = "h2" align = "center">Video Chat</Typography>
                  </AppBar>
                  <VideoPlayer />
                  <Options>
                     <Notifications />
                  </Options>
                </div>
            </div>
        </div>
    )
}

export default SkypeClone
