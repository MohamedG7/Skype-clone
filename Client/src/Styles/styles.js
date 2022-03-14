////============ MUI STYLY ================//
import { makeStyles, alpha } from "@material-ui/core/styles";
const drawerWidth = 0;
export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        border: '2px solid black',
        backgroundImage: 'linear-gradient(45deg, rgb(230, 230, 230), white)',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    video: {
      width: '400px',
      border: '2px solid lightgray',
      borderRadius: '10px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '2px solid lightgray',
      margin: '10px',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    margin_txt: {
      marginBottom: "20px"
    }
}));
