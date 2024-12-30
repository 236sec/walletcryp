import Web3 from "web3";

export async function getWeb3() {
  const web3 = new Web3(window.ethereum);
  await window.ethereum.enable();
  return web3;
}

export async function getAccount() {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  return accounts;
}

export async function getBalance(accountID) {
  console.log(accountID);
  if (accountID === "default") {
    return 0;
  }
  const web3 = await getWeb3();
  const balanceEth = await web3.eth.getBalance(accountID);
  console.log("User Balance", balanceEth);
  const balance = web3.utils.fromWei(balanceEth, "ether");
  return balance;
}
