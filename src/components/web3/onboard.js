import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import {API_KEY} from '../../private/onboard_api';
import {contract_abi} from './contract_abi';
import {round} from 'lodash'


let web3;

//const contract_address = "0x865AAd4689e5aBA7D0610f3e17BAF4439EA059eC";
//const contract_address = "0x998BA9FaF4052f542124A638c0b3606C743495aB";
//const contract_address = "0xE7D40De0600eDEE0e549d89D9Bd65Bf6767af2aa";
//const contract_address = "0xC30136d8656bf263779f3f2eA6a644254435FDab";
//const contract_address = "0x586fe06B3682e3cCF013846B4dB093b75218526E";


//RINKEBY
//const contract_address = "0x77294C123cd74E7a802ca4F5aFAaeE2Fd3dF31F1";

//MAINNET
const contract_address = "0x7ef232E01C45377b0321ff11cA50c59C5B69212b";
const mint_price = 0.0666

export const onboard = Onboard({
  dappId: API_KEY,
  networkId: 1, //MAINNET
  //networkId: 4, //RINKEBY
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
  //const check = onboard?.walletCheck();
  if(web3)
  {
    const isReady = onboard.walletCheck();
    if(isReady)
    {
      var accounts = await web3.eth.getAccounts();
      console.log("Accounts: " + accounts);
    }   
    else {
      console.log("Wallet Check Failed");
    }
  }   
  else{
    console.log("Wallet not connected");
  }
}

export const mintCreepKid = async (count) => {
  if(web3){
    const isReady = await onboard.walletCheck();
    if(isReady){
      var accounts = await web3.eth.getAccounts();
      const mintAccount = accounts[0];
      console.log("Send Account: ", mintAccount);

      var contract = new web3.eth.Contract(contract_abi,contract_address);
      console.log("After Contract Establish!");

      console.log("Raw final price: ", mint_price * count)
      const final_price = String(round(mint_price * count, 4))
      console.log("Final Price: ", final_price)

      //get gas
      const gas = await contract.methods.createCreepKid(mintAccount, count).estimateGas({
        from:mintAccount,
        value: web3.utils.toWei(final_price, "ether") 
      });

      console.log("Gas Estimate: ", gas)
      var padded = gas + (gas * .11);
      console.log(padded);
      var finalGas = Math.trunc(padded);
      console.log(finalGas);
      //mint
      const mintTx = await contract.methods.createCreepKid(mintAccount, count).send({
        from: mintAccount,
        value: web3.utils.toWei(final_price, "ether"),
        finalGas
      },function(error, result){
        console.log("result: " + result)
        console.log("error: " + error )
        if(error) {
          console.log("Error detetected");
        }
      });
      return true;
    }
    else{
      console.log("Wallet check failed");
      return false;
    }
  }
  else{
    console.log("Provider not initialized")
    return false
  }
}


export const unlockContract = async () => {
  var accounts = await web3.eth.getAccounts();
  const sendAccount = accounts[0];
  console.log("Send Account: ", sendAccount);

  var contract = new web3.eth.Contract(contract_abi,contract_address);
  console.log("After Contract Establish!");

  const receiveAddress = "0x5De3003d700854320cE0349ECD06e0EA8b66E323"
  const mintCount = 7;
  //get gas
  const gas = await contract.methods.unlock().estimateGas({
    from:sendAccount
  });

  console.log("Gas Price: ", gas)

  var padded = gas + (gas * .11);
  console.log(padded);
  var finalGas = Math.trunc(padded);
  console.log(finalGas);

  //unlock
  const mintTx = await contract.methods.unlock().send({
    from: sendAccount,
    finalGas
  },function(error, result){
    console.log("result: " + result)
    console.log("error: " + error )
    if(error) {
      console.log("Error detetected");
    }
  });
}

export const interactContractTest = async () => {
  var accounts = await web3.eth.getAccounts();
  const sendAccount = accounts[0];
  console.log("Send Account: ", sendAccount);

  var contract = new web3.eth.Contract(contract_abi,contract_address);
  console.log("After Contract Establish!");

  const receiveAddress = "0x5De3003d700854320cE0349ECD06e0EA8b66E323"
  const mintCount = 7;
  //get gas
  const gas = await contract.methods.promoMint(receiveAddress,mintCount).estimateGas({
    from:sendAccount
  });

  console.log("Gas Price: ", gas)

  var padded = gas + (gas * .11);
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
}
