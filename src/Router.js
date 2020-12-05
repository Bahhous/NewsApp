import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { PUBLIC_ROUTE } from "./route.constants";

import Loader from "./Components/Loader";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import("./Pages/Home")),
  },
];

export default function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
          <Redirect
            to={{
              pathname: PUBLIC_ROUTE.LANDING,
            }}
          />
        </Switch>
      </Router>
    </Suspense>
  );
}
