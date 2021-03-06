import { useState, useEffect } from "react";
import { projectauth } from "../Firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCanclled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();



  const signup = async (email, password, displayName) => {



    //set error to null
    setError(null);

    //set is pending to true we start our request
    setIsPending(true);

    //try-catch block 
    try {

      //signup
      //creating user using email and password
      const res = await projectauth.createUserWithEmailAndPassword(email, password);


      //if no res === error then throw new error
      if (!res) {
        throw new Error('Could not Complete the Signup');
      }

      //adding displayName to the userProfile
      await res.user.updateProfile({ displayName: displayName });

      //dispatch
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

  //return the states
  return { error, isPending, signup };

}