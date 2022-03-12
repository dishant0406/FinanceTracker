import { useState, useEffect } from "react";
import { projectauth } from "../Firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCanclled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {

    //set error to null
    setError(null);

    //set is pending to true and start the request
    setIsPending(true);

    //sign out the user
    try {

      const res = await projectauth.signInWithEmailAndPassword(email, password);


      //dispatch the LOGOUT ACTION
      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCanclled) {

        //set is pending false
        setIsPending(false);

        //set error null again
        setError(null);

      }
    }
    catch (err) {

      if (!isCanclled) {

        console.log(err.message);

        //catch the error and set the error to the error message
        setError(err.message);

        //set is pending to be false
        setIsPending(false);
      }
    }

  }

  useEffect(() => {


    return () => {
      setIsCancelled(true)
    }
  }, [])


  return { login, error, isPending };
}