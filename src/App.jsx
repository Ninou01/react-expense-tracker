import { useEffect, useMemo, useState } from "react";
import Header from './components/Header'
import Wallet from "./components/Wallet";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";

const App = () => {
  const [balance, setBalance] = useState(0)
  const [expense, setExpense] = useState(0)
  const [income, setIncome] = useState(0)
  const [showAdd, setShowAdd] = useState(false)
  const [query, setQuery] = useState("")
  const [transactions, setTransactions] = useState([])
  const filtredTransactions = useMemo(() => transactions.filter(transaction => {
    return transaction.description.toLowerCase().includes(query.toLowerCase())
  }), [query, transactions])
  
  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      if (transaction.type === "income") {
        totalIncome += transaction.amount;
      } else {
        totalExpense += transaction.amount;
      }
    }
    
    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
  },[])
  
    const onAdd = (newTransaction) => {
      setTransactions([...transactions, newTransaction])
      if (newTransaction.type === "income") {
        setBalance(balance + newTransaction.amount)
        setIncome(income + newTransaction.amount)
      } 
      else {
        setBalance(balance - newTransaction.amount)
        setExpense(expense + newTransaction.amount)
      }
    }
  
  return (
    <div className="App container">
      <Header balance={balance} showAdd={showAdd} handleShowAdd={(e) => setShowAdd(!showAdd)}/>
      {showAdd && <AddTransaction onAdd={onAdd}/>}
      <Wallet income={income} expense={expense}/>
      <Transactions transactions={filtredTransactions} queryHandler={(e) => setQuery(e.target.value)}/>
    </div>
  );
}

export default App;
