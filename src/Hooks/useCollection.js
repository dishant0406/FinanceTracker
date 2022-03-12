import { useEffect, useRef, useState } from "react"
import { projectFirestore } from "../Firebase/config";

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;

  useEffect(() => {

    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unsub = ref.onSnapshot((snapshot) => {
      let res = [];
      snapshot.docs.forEach(doc => {
        res.push({ ...doc.data(), id: doc.id })
      })

      setDocuments(res);
      setError(null);
    }, (err) => {
      console.log(err);
      setError(err.message)
    })

    return () => unsub();


  }, [collection, query])

  return { documents, error };

}