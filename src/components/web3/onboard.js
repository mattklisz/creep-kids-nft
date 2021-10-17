import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import {API_KEY} from '../../private/onboard_api';
import {contract_abi} from './contract_abi';

let web3;

//const contract_address = "0x865AAd4689e5aBA7D0610f3e17BAF4439EA059eC";
const contract_address = "0x998BA9FaF4052f542124A638c0b3606C743495aB";

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
  console.log("Send Account: ", sendAccount);

  var contract = new web3.eth.Contract(contract_abi,contract_address);
  console.log("After Contract Establish!");

  await contract.methods.getMessage().call(function(error, result){
    console.log("result: " + result)
    console.log("error: " + error )
  });

  //get gas
  const gas = await contract.methods.createCreepKid(sendAccount).estimateGas({
    from:sendAccount
  });
  console.log("Gas Price: ", gas)

  //mint
  const mintTx = await contract.methods.createCreepKid(sendAccount).send({
    from: sendAccount,
    gas
  },function(error, result){
    console.log("result: " + result)
    console.log("error: " + error )
  });
  
  console.log("mint tx: ", mintTx);


}
