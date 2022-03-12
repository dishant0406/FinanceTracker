import React from 'react'
import { useFirestore } from '../../Hooks/useFirestore'

const TransactionList = ({documents}) => {
  const {deleteDocument} = useFirestore('transactions')


  const docArr = documents.map(doc=>{
    return <div className="ui card black inverted segment" bis_skin_checked="1" key={doc.id}>
    <div className="content" bis_skin_checked="1">
    <div className="ui right floated white button" bis_skin_checked="1" onClick={()=>deleteDocument(doc.id)}>Delete</div>
      <div className="header" bis_skin_checked="1">
        {`${doc.amount} ₹`}
      </div>
      <div className="ui medium red text" bis_skin_checked="1">
        {doc.name.toUpperCase()}
      </div>
    </div>
  </div>
  })
    return (
      <>
      {docArr.length===0 && <div className="ui warning message" bis_skin_checked="1">
                              <div className="header" bis_skin_checked="1">
                                No Transactions made Yet!!
                              </div>
                              Click on "Add" to add Transaction 
                            </div>}
    <div className="ui doubling cards" bis_skin_checked="1">
      {docArr}
    </div>
    </>
    
  )
}

export default TransactionList