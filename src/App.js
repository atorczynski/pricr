import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import { ContentContainer } from './Components/GlobalComponents/BodyHelper';
import Header from './Components/Header/Header';

import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './Themes/defaultThemes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <Header heading={'PRICR'} />
        <GlobalStyles />
        <ContentContainer>
          <Route exact path={'/'}>
            <Home />
          </Route>
        </ContentContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
