import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
      display: "flex",
      alignItems: "center"
  },
  topicsWindow: {
      width: "30%",
      height: "300px",
      borderRight: '1px solid grey'
  },
  chatWindow: {
     width: "70%",
     height: "300px",
     padding: "20px"
  },
  chatBox: {
    width: "85%"
  },
  button: {

  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [textValue, onTextValueChange] =  React.useState('');

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
            Chat App
        </Typography>
        <Typography variant="h6" component="h6">
          Topic placeholder
        </Typography>
        <div className={classes.flex}>
            <div className={classes.topicsWindow}>
            <List>
                {
                    ['topic'].map(topic => (
                        <ListItem key={topic} button>
                            <ListItemText primary={topic} />
                        </ListItem>
                    ))
                }
                
            </List>
            </div>
            <div className={classes.chatWindow}>
                {
                    [{from: 'User', msg: 'hello'}].map((chat, index) => (
                        <div key={index} className={classes.flex}>
                            <Chip label={chat.from} className={classes.chip} />
                            <Typography varient="p">{chat.msg}</Typography>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className={classes.flax}>
            <TextField
                label="Start a conversation!"
                className={classes.chatBox}
                value={textValue}
                onChange={e => onTextValueChange(e.target.value)}
                margin="normal" />
            <Button variant="contained" color="primary" className={classes.button}>
                send
            </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Dashboard;