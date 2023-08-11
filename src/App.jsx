import { useMemo, useState, useContext } from "react";
import { TransactionsContext } from "./context/TransactionContext";
import Header from './components/Header'
import Wallet from "./components/Wallet";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";

const App = () => {
  const { transactions } = useContext(TransactionsContext)

  const { toLowerCase } = useContext(TransactionsContext)
  const [showAdd, setShowAdd] = useState(false)
  const [query, setQuery] = useState("")

  const filtredTransactions = useMemo(() => transactions.filter(transaction => {
    return transaction.description.toLowerCase().includes(query.toLowerCase())
  }), [query, transactions])

  
  return (
  <div className="App container">
      <Header showAdd={showAdd} handleShowAdd={(e) => setShowAdd(!showAdd)}/>
      {showAdd && <AddTransaction />}
      <Wallet />
      <Transactions filtredTransactions={filtredTransactions} queryHandler={(e) => setQuery(e.target.value)}/>
    </div>
  );
}

export default App;
