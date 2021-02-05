import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostAddIcon from '@material-ui/icons/PostAdd';

function WritePost() {
  const navigate = useNavigate();
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/post/new');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <Button size="small" disableElevation variant="contained" color="primary" onClick={handleClick} startIcon={<PostAddIcon />}>
      Novo Post
    </Button>
  );
}

export default WritePost;
