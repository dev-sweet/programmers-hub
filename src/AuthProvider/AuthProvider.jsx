import { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = useAuth();

  const loginWithGooglePopUp = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const unsbuscribe = () => {
    return onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
      setIsLoading(false);
    });
  };
  unsbuscribe();

  return (
    <AuthContext.Provider
      value={{
        loginWithGooglePopUp,
        signUpWithEmailAndPassword,
        loginWithEmailAndPass,
        logOut,
        isLoading,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
