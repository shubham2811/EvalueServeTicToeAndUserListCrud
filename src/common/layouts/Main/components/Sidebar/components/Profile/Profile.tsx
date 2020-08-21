import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import {userInfo} from '../../../../../../utils'
const useStyles = makeStyles((theme:any )=> ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const user = {
    name: userInfo().name,
    avatar: userInfo().profileImage,
    bio: userInfo().userRole === 'SUB_DSP' ||  userInfo().userRole === 'DSP' ? 'DSP/ASP' :  userInfo().userRole
  };

  return (
    <div 
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt={userInfo().name}
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar&&`data:image/png;base64, ${user.avatar}`}
        to="/dashboard"
      />
      <Typography style={{color:"white",fontWeight:'bold'}}
        className={classes.name}
        variant="h6"
      >
       {user.name}
      </Typography>
      <Typography variant="body2" style={{color:'white'}}>{user.bio}</Typography>
    </div>
  );
};

export default Profile;
