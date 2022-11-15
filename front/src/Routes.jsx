import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import error404 from "./components/pages/404.jsx";
import {useAuth} from "./hooks/useAuth"; 

import { routes } from "./dataRoutes.js";

const App = () => {
  const { isAuth } = useAuth();
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          if (route.auth && !isAuth) {
            return false;
          }
          return (
            <Route
              path={route.path}
              exact={route.exact}
              key={`route ${route.path}`}
              element={<route.component />}
            />
          );
          
        })}
        <Route component={error404} />
      </Routes>
    </Router>
  );
};

export default App;
