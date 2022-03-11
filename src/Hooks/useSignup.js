import { useState } from "react";
import { projectauth } from "../Firebase/config";

export const useSignup = () => {

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

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
      console.log(res.user);

      //if no res === error then throw new error
      if (!res) {
        throw new Error('Could not Complete the Signup');
      }

      //adding displayName to the userProfile
      await res.user.updateProfile({ displayName: displayName });

      //set pending false
      setIsPending(false);

      //set error null
      setError(null)
    }
    catch (err) {

      //catch the error
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  }

  //return the states
  return { error, isPending, signup };

}