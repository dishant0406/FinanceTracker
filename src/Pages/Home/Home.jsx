import './Home.css'

import React from 'react'
import Transactions from './Transactions'
import { useAuthContext } from '../../Hooks/useAuthContext';
import { useCollection } from '../../Hooks/useCollection';
import TransactionList from './TransactionList';

const Home = () => {
  const {user} = useAuthContext();
  const {documents, error} = useCollection('transactions',["uid", '==', user.uid]);

  return (
    <div className='ui container'>
      <h2 className="ui center aligned icon header" style={{marginTop: '1rem'}}>
      <i className="hand holding usd icon"></i>
      Transactions
    </h2>
    <div className="ui stackable four column grid">
  <div className="eleven wide column">
    <div>
    <h2 className="ui header">
      <img className="ui image" src="https://i.ibb.co/djznPJ3/List-PNG-File.png"/>
      <div className="content" bis_skin_checked="1">
        Transaction List
      </div>
    </h2>
      {error && <div className="ui negative message" bis_skin_checked="1">
                  <i className="close icon"></i>
                  <div className="header" bis_skin_checked="1">
                    We're sorry we can't apply that discount
                  </div>
                  <p>That offer has expired</p>
                </div>}
      {documents && <TransactionList documents={documents}/>}
    </div>
  </div>
  <div className="five wide column"><Transactions uid={user.uid}/></div>
</div>
    </div>
  )
}

export default Home