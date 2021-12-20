import { withStyles } from "@material-ui/styles";
import Scroll from "./helpers/Scroll";
import styles from "./styles/MainStyles";

const Main = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <h1 className={classes.name}>
          Me<span>at</span> Home
        </h1>
        <Scroll scrollTo={"1"} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
