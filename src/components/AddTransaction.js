import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: date,
      time: new Date().toLocaleTimeString()
    }
  

    addTransaction(newTransaction);

  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}