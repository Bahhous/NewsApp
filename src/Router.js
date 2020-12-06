import React, { lazy, Suspense } from "react";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { PUBLIC_ROUTE } from "./route.constants";

import Loader from "./Components/Loader";
import Base from "./Template/Base";

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING + "/",
    exact: true,
    component: lazy(() => import("./Pages/Home")),
  },
  {
    path: PUBLIC_ROUTE.TOP_HEADLINES,
    exact: true,
    component: lazy(() => import("./Pages/Home")),
  },
  {
    path: PUBLIC_ROUTE.CUSTOM,
    exact: true,
    component: lazy(() => import("./Pages/Home")),
  },
  {
    path: PUBLIC_ROUTE.PROFIL,
    exact: true,
    component: lazy(() => import("./Pages/Profile")),
  },
];

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Base>
              {publicRoutes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </Route>
              ))}
            </Base>
            <Redirect
              to={{
                pathname: PUBLIC_ROUTE.LANDING,
              }}
            />
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
