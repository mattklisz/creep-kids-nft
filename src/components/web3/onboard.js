import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import {API_KEY} from '../../private/onboard_api';
import {contract_abi} from './contract_abi';

let web3;

const contract_address = "0x865AAd4689e5aBA7D0610f3e17BAF4439EA059eC";

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

  var contract = new web3.eth.Contract(contract_abi,contract_address);
  console.log("After Contract Establish!");
  //TODO
  //get contract ABI -- Can I just get this from hardhat build?
  //get reference to contract -- web3.eth?
  //Call get name function on already deployed contract
}
