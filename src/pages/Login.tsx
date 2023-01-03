import React, { useState } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  AuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useParams } from "react-router-dom";
// Assets
import { auth } from "../shared/firebase";
import { useAuthStore } from "../store";
// Components
import Alert from "../components/Alert";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const { redirect } = useParams();
  const currentUser = useAuthStore((state) => state.currentUser);
  // States, variables
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alertOpened, setAlertOpened] = useState<boolean>(false);
  // Effects
  // Handlers
  const handleLogin = async (provider: AuthProvider) => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
    } catch (err: any) {
      setAlertOpened(true);
      setError(`Error: ${err?.code}`);
    } finally {
      setLoading(false);
    }
  };

  if (currentUser) {
    return <Navigate to={redirect || "/"}></Navigate>;
  }

  return (
    <div className="h-screen flex justify-center p-5 lg:px-52 lg:py-10">
      <div className="w-full max-w-[1100px]">
        {/* Header */}
        <div className="flex justify-between mt-4 mb-8">
          <div className="flex items-center gap-4">
            <img src="/icon.png" className="w-8 h-8" alt="" />
            <span className="text-2xl font-bold">QuickChat</span>
          </div>
          <a
            href="https://github.com/trungnguyenhuynhminh46/tchat.git"
            className="flex items-center gap-3 text-xl"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
            <span>Github</span>
          </a>
        </div>
        {/* End header */}
        <div className="flex flex-col items-center gap-5 lg:flex-row-reverse lg:gap-20">
          <div className="flex flex-col items-center gap-5 lg:items-start lg:basis-2/3">
            <h1 className="text-3xl">Have your best chat</h1>
            <h2 className="text-2xl text-center lg:text-start">
              Fast, easy and unlimited chat. Chat with anyone anytime.
            </h2>
            <button
              className="w-[300px] flex gap-5 p-4 rounded-md bg-white text-gray-700"
              onClick={() => {
                handleLogin(new GoogleAuthProvider());
              }}
            >
              <img src="/google.svg" alt="" />
              <span>Sign in with google</span>
            </button>
            <button
              className="w-[300px] flex gap-5 p-4 rounded-md bg-[#3498db]"
              onClick={() => {
                handleLogin(new FacebookAuthProvider());
              }}
            >
              <img src="/facebook.svg" alt="" />
              <span>Sign in with facebook</span>
            </button>
          </div>
          <img
            src="/cat-computer.gif"
            className="basis-1/3 rounded-full"
            alt=""
          />
        </div>
        {/* End content */}
        <Alert
          isOpen={alertOpened}
          setIsOpen={setAlertOpened}
          text={error}
          isError
          duration={5000}
        />
      </div>
    </div>
  );
};

export default Login;
