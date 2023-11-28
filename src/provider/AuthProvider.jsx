import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  //   const axiosPublic = useAxiosPublic();
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const handleGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
      setLoading(false);
      //  const userInfo = { email: currentUser?.email || user?.email };
      //  // console.log(userInfo);
      //  if (currentUser?.email || user?.email) {
      //    // get user info and create token and set token to Ls
      //    axiosPublic
      //      .post("/jwt", userInfo)
      //      .then((result) => {
      //        // console.log(result.data);
      //        if (result?.data?.token) {
      //          localStorage.setItem("token", result?.data?.token);
      //          setLoading(false);
      //        }
      //      })
      //      .catch((err) => {
      //        console.log(err);
      //      });
      //  } else {
      //    // if no user then remove token from LS
      //    localStorage.removeItem("token");
      //  }
    });
    return () => {
      unSubscribe;
    };
  }, [user]);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    handleGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
