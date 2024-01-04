/* eslint-disable linebreak-style */
import React from 'react';
import { CssBaseline } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Profile, NavBar } from './index';

import useStyles from './styles';

// eslint-disable-next-line react/function-component-definition
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/movies/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
