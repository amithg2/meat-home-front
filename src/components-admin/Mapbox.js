import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    mapbox: {
        backgroundColor: 'lightgreen',
        width: '100%',
        height: '40vh'
    }
}

function Mapbox(props) {
    const {classes} = props
    return (
        <div className={classes.mapbox} >
            mapbox
        </div>
    )
}

export default withStyles(styles)(Mapbox)
