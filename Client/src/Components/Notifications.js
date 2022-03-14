import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { SocketContext } from '../App/SocketContext'

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    return (
        <>
            
            {call.isReceivingCall && !callAccepted && (
                <div style = {{display: 'flex', justifyContent: 'center'}}>
                  <h1>{call.name} Is Calling: </h1>
                  <Button variant = "contained" color = "primary" onClick={answerCall}>Answer</Button>
                </div>
            )}
            
        </>
    )
}

export default Notifications
