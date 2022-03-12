import React, { useState, useEffect } from 'react';
import { useFirestore } from '../../Hooks/useFirestore';


const Transactions = ({uid}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const {addDocument, response} = useFirestore('transactions');

  const handleClick = (e) =>{
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount
    })
  }

  useEffect(() => {
    
    if(response.success){
      setAmount('');
      setName('');
    }
  
    
  }, [response.success])
  

  return (
    <div className="ui green inverted segment">
    <form className="ui inverted form" onSubmit={handleClick}>
  <div className="field">
    <label>Transaction Name</label>
    <input type="text" name="name" placeholder="Transaction Name" onChange={e=> setName(e.target.value)} value={name} />
  </div>
  <div className="field">
    <label>Amount (₹)</label>
    <input type="text" name="amount" placeholder="Amount" onChange={e=> setAmount(e.target.value)} value={amount}/>
  </div>
  <button className="ui black button fluid" type="submit">Add</button>
</form>
</div>
  )
}

export default Transactions;