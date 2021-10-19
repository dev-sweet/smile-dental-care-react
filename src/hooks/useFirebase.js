import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  // const [error,setError] = useState('');
  const auth = getAuth();

  const signInWithGoogle = () => {
    const googleAuth = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuth)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
    }).catch(err=> console.log(err));
  };
  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
    }).catch(err=> console.log(err));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  return { signInWithGoogle, user, logOut, signInWithEmail, createUser };
};
export default useFirebase;
