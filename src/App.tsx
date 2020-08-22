import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./common/Routes";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./common/theme";
import { ErrorBoundary } from "./common/ErrorBoundary";
class App extends React.Component<any> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
