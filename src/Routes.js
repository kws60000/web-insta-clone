import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import PostAdd from "./components/PostAdd";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/PostAdd" component={PostAdd} />
    </Switch>
  );
};

export default Routes;
