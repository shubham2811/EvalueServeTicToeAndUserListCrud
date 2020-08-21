import React from 'react';
import { HashRouter as Router  } from 'react-router-dom';   
import Routes from './common/Routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './common/theme';
import './assets/scss/index.scss';
// import {createBrowserHistory} from 'history';
import {ErrorBoundary} from './common/ErrorBoundary'
// const history = createBrowserHistory();
class App extends React.Component<any> {
  render() {
    console.log()
    return (
      <ThemeProvider theme={theme}>
      {/* <Router history={history}> */}
      <Router>
      <ErrorBoundary>
      <Routes/>
      </ErrorBoundary>
      </Router>
      </ThemeProvider>
 
    );
  }
}

export default App


