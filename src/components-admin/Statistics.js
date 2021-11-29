import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    statistics: {
        backgroundColor: 'lightcyan',
        width: '100%',
        height: '40vh'
    }
}

function Statistics(props) {
    const {classes} = props
    return (
        <div className={classes.statistics} >
            Statistics
        <ul>
            <li>date board</li>
            <li>more</li>
        </ul>
        </div>
    )
}

export default withStyles(styles)(Statistics)
