import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header/Header';

import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './Themes/defaultThemes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <Header heading={'PRICR'} />
        <GlobalStyles />
        <Route exact path={'/'}>
          <Home />
        </Route>
      </ThemeProvider>
    </Router>
  );
}

export default App;
