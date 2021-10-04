import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={< Profile />} />
        <Route path="/:username/:reponame" element={< Repo />} />
      </Switch>
       <Footer />
      <GlobalStyles />
    </BrowserRouter>

  );
}

export default App;
