import React, { useState } from 'react';
import clsx from 'clsx';
import  makeStyles  from '@material-ui/styles/makeStyles';
import { useMediaQuery, Theme, AppBar } from '@material-ui/core';

import { Sidebar, Topbar, Footer } from './components';

const useStyles = makeStyles((theme:Theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    padding:theme.spacing(1),
 
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const isDesktop = useMediaQuery((theme:any)=>theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (

    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
       
      </main>
      <AppBar position="fixed" color="secondary" className={classes.appBar} style={{left:isDesktop?242:0}} >
          <Footer />
     </AppBar>
    </div>

  );
};

export default Main;
