import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    main : {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '0.3em 0',
        cursor: 'pointer'
    }
}
function SmallReservation(props) {
    const {classes, reservation, setIsMore,isMore} = props
    return (
        <div className={classes.main} onClick= {() => setIsMore(!isMore)} style={{background: reservation.isApproved? 'green' : 'red'}}>
          
            <h4>הזמנה מספר {reservation.resId}</h4>
            <h5>בתאריך {reservation.dateRes}</h5>
            
         {reservation.isApproved? <p>אושרה</p>: <p>לא אושרה</p>}

        </div>
    )
}

export default withStyles(styles)(SmallReservation)
