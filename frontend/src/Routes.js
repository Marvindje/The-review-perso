import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profil from './components/Profil';
import Categories from './components/Categories';
import NotFound from './components/NotFound';

const Routes = () => (
  <Router>
    <Switch>
  <Route path="/mon-profil">
    <MonProfil />
  </Route>
  <Route path="/mes-posts">
    <MesPosts />
  </Route>
  <Route path="/creer-post">
    <CreerPost />
  </Route>
  <Route path="/categorie/:categorieId">
    <Categorie />
  </Route>
  <Route path="/">
    <Accueil />
  </Route>
</Switch>
  </Router>
);

export default Routes;
