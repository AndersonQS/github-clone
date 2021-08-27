import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={< Profile />}></Route>
        <Route path="/:username/:reponame" element={< Repo />}></Route>
      </Routes>
      {/* < Footer /> */}
    </BrowserRouter>
  );
}

export default App;
