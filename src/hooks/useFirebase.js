import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "@firebase/auth";
  import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

  
  initializeAuthentication();
  const useFirebase = () => {
    const [user, SetUser] = useState({});
    const [admin, setAdmin] = useState({});
    const [doctor, setDoctor] = useState({});
    const auth = getAuth();
    const gProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
      return signInWithPopup(auth, gProvider);
    };
  
    const registerUser = (email, pass) => {
      return createUserWithEmailAndPassword(auth, email, pass);
    };
  
    const login = (email, pass) => {
      return signInWithEmailAndPassword(auth, email, pass);
    };

  
    const logout = () => {
      signOut(auth).then(() => {
        SetUser({});
        localStorage.removeItem("isAuth");
        localStorage.removeItem("isAdm");
        localStorage.removeItem("isDoc");
      });
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          SetUser(user);
        }
        return unsubscribe;
      });
    },[]);

    useEffect(() => {
      fetch(`https://ruseable.onrender.com/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          data.admin ? setAdmin(data) : setAdmin({});
          data.doctor ? setDoctor(data) : setDoctor({});
        });
    }, [user.email]);

    return {
      auth,
      user,
      admin,
      doctor,
      updateProfile,
      SetUser,
      registerUser,
      login,
      logout,
      signInGoogle,
    };
  };
  
  export default useFirebase;
  