import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import {API_KEY} from '../../private/onboard_api';

let web3;

export const onboard = Onboard({
  dappId: API_KEY,
  networkId: 4,
  subscriptions: {
    wallet: wallet => {
      web3 = new Web3(wallet.provider)
    }
  },
  walletSelect: {
    wallets: [{walletName: "metamask", preferred: true}]
  }
});

export const logAddress = async () => {
  var accounts = await web3.eth.getAccounts();
  console.log("Accounts: " + accounts);
}

export const interactContractTest = async () => {
  var accounts = await web3.eth.getAccounts();
  const sendAccount = accounts[0];

  //TODO
  //get contract ABI -- Can I just get this from hardhat build?
  //get reference to contract -- web3.eth?
  //Call get name function on already deployed contract
}
