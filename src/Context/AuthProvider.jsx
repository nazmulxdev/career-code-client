import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/fireBase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const authInfo = {
    loading,
    currentUser,
    setCurrentUser,
    setLoading,
    registerUser,
    logInUser
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
