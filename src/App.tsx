import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getAccount, getBalance } from "./eth/network";

function App() {
  const [count, setCount] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0);

  const handleChange = async (e) => {
    const newBalance = (await getBalance(e.target.value)) as number;
    setBalance(newBalance);
  };

  async function initpage() {
    const user = await getAccount();
    console.log(user);
    setAccounts(user);
  }

  useEffect(() => {
    initpage();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account) => (
            <li key={account}>{account}</li>
          ))}
        </ul>
      ) : (
        <h1>Please Connect to Your Metamask</h1>
      )}
      {accounts.length > 0 ? (
        <select name="walletID" onChange={handleChange}>
          <option value={"default"}>select your wallet</option>
          {accounts.map((account, i) => (
            <option key={i} value={account}>
              {account}
            </option>
          ))}
        </select>
      ) : null}
      <h1>Your Balance is {balance}</h1>
    </>
  );
}

export default App;
