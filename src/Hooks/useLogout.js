import { useState, useEffect } from "react";
import { projectauth } from "../Firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCanclled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {

    //set error to null
    setError(null);

    //set is pending to true and start the request
    setIsPending(true);

    //sign out the user
    try {

      await projectauth.signOut();


      //dispatch the LOGOUT ACTION
      dispatch({ type: 'LOGOUT' });

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


  return { logout, error, isPending };
}