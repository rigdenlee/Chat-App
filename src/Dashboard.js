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

import {Context} from './Store';


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

  // Context store
  const {allChats, sendChatAction, user} = React.useContext(Context);
  
  // console.log({allChats});

  const topics = Object.keys(allChats);

  //local state
  const [activeTopic, onChangeActiveTopics] = React.useState(topics[0]);
  const [textValue, onTextValueChange] =  React.useState('');

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
            Chat App
        </Typography>
        <Typography variant="h6" component="h6">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
            <div className={classes.topicsWindow}>
            <List>
                {
                    topics.map(topic => (
                        <ListItem onClick={e => onChangeActiveTopics(e.target.innerText) } key={topic} button>
                            <ListItemText primary={topic} />
                        </ListItem>
                    ))
                }
            </List>
            </div>
            <div className={classes.chatWindow}>
                {
                    allChats[activeTopic].map((chat, index) => (
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
            <Button variant="contained" color="primary" className={classes.button} onClick={() => {
              sendChatAction({from: user, msg: textValue, topic: activeTopic});
              onTextValueChange('');
            }}>
                send
            </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Dashboard;