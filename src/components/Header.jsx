const Header = ({ balance, showAdd, handleShowAdd }) => {
    return (
    <header>
        <div className="title">
          <h1>Expense Tracker</h1>
        </div>
        <div className="flex-box">
          <div className="balance-box">
            <span>Balance: ${balance}</span>
          </div>
          <div>
            <button className="btn" onClick={() => handleShowAdd()}>{showAdd ? "CLOSE" : "ADD"}</button>
          </div>
        </div>
    </header>
    )
}

export default Header