import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
// Asset
import { useAuthStore } from "./store";
import { auth, db } from "./shared/firebase";
// Components
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { ScaleLoader } from "react-spinners";

const App: React.FC = () => {
  // States
  const currentUser = useAuthStore((state) => state.currentUser);
  const setCurrentUser = useAuthStore((store) => store.setCurrentUser);
  // Effects
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  if (typeof currentUser === "undefined") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ScaleLoader color="rgb(54, 152, 214)" loading height={40} />
      </div>
    );
  }

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
