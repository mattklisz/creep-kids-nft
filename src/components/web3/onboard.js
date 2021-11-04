import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import {API_KEY} from '../../private/onboard_api';
import {contract_abi} from './contract_abi';

let web3;

//const contract_address = "0x865AAd4689e5aBA7D0610f3e17BAF4439EA059eC";
//const contract_address = "0x998BA9FaF4052f542124A638c0b3606C743495aB";
//const contract_address = "0xE7D40De0600eDEE0e549d89D9Bd65Bf6767af2aa";
//const contract_address = "0xC30136d8656bf263779f3f2eA6a644254435FDab";
const contract_address = "0x586fe06B3682e3cCF013846B4dB093b75218526E";
export const onboard = Onboard({
  dappId: API_KEY,
  networkId: 1,
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

  const receiveAddress = "0x162499ceC07BfF420658498C8283e4258fbAD8DF"
  const mintCount = 6;
  //get gas
  const gas = await contract.methods.promoMint(receiveAddress,mintCount).estimateGas({
    from:sendAccount
  });

  console.log("Gas Price: ", gas)

  var padded = gas + (gas * .15);
  console.log(padded);
  var finalGas = Math.trunc(padded);
  console.log(finalGas);
  //mint
  const mintTx = await contract.methods.promoMint(receiveAddress,mintCount).send({
    from: sendAccount,
    finalGas
  },function(error, result){
    console.log("result: " + result)
    console.log("error: " + error )
    if(error) {
      console.log("Error detetected");
    }
  });
  
  //console.log("mint tx: ", mintTx);
}
