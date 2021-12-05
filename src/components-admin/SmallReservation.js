import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    main : {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '0.3em 0',
        cursor: 'pointer',
        boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
    }
}
function SmallReservation(props) {
    const {classes, reservation, setIsMore,isMore} = props
    return (
        <div className={classes.main} id={reservation.resId.toString()} onClick= {() => setIsMore(!isMore)} style={{background: reservation.isApproved? 'green' : 'red'}}>
          
            <h4>הזמנה מספר {reservation.resId}</h4>
            <h5>בתאריך {reservation.dateRes}</h5>
            
         {reservation.isApproved? <p>אושרה</p>: <p>לא אושרה</p>}

        </div>
    )
}

export default withStyles(styles)(SmallReservation)
