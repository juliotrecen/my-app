import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

import WritePost from './WritePost';
import Notifications from './Notifications';
import Account from './Account';
import Settings from './Settings';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
  img: {
    maxHeight: 50,
  },
  grow: {
    flexGrow: 1,
    minWidth: 16,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
});

function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return {
    width,
  }
}


function Header() {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const image = (() => {
    if (width > 960) {
      return "/images/logo_1.png";
    } else {
      return "/images/logo_2.png";
    }
})();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Link to="/">
          <img src={image} alt="logo" className={classes.img} />
        </Link>
        <div className={classes.grow} />
        <div className={classes.userSection}>
          <WritePost />
          <Box ml={0}>
            <Notifications />
          </Box>
          <Box ml={0}>
            <Settings />
          </Box>
          <Box ml={0}>
            <Account />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
