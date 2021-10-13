import React from 'react'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import grey from "../pics/grey.jpeg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${blue})`,
    position: 'relative',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: '600px',
    paddingTop: '25px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    margin: 0,
  },
}));

function BackgroundImage() {
  const classes = useStyles()

  return (
    <Box>
      <div className={classes.overlay}>
        <Box className={classes.background}>
        </Box>
      </div>
    </Box>
  )
}

export default BackgroundImage;
