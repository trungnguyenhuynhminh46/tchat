import React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route
        path=":id"
        element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
