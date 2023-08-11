import Transaction from "./Transaction"


const Transactions = ({ filtredTransactions, queryHandler }) => {
    
    return (
        <div className="transactions">
            <h3 className="title"> Transactions </h3>
            <input type="text" onChange={queryHandler} className="search-bar" placeholder="Search"/>
            <ul className="transactions-list">
                {filtredTransactions.map((transaction, i) => <Transaction key={i} transaction={transaction} />)}
            </ul>
        </div>
    )
}

export default Transactions
