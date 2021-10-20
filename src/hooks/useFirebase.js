import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleAuth = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuth).finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  const createUser = (email, password,name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        window.location.reload()
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .catch((err) => console.log(err));
  };
  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
  }, [auth]);
  return {
    signInWithGoogle,
    user,
    logOut,
    signInWithEmail,
    createUser,
    isLoading,
  };
};
export default useFirebase;
