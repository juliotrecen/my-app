
import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import PostEditor from './Editor';
import PostPreview from './Preview';
import BottomBar from './BottomBar';
import { PostProvider } from '../../../context/PostContext';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "600px", 
  },
}));

function NewPost() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PostProvider>
        <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
          <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
            <PostEditor />
          </Box>
          <Box width="50%" height="100%" padding={2}>
            <PostPreview />
          </Box>
        </Box>
        <BottomBar />
      </PostProvider>
    </div>
  );
}

export default NewPost;
