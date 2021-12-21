import {useEffect, useState} from 'react';
import {onboard, logAddress, interactContractTest} from './onboard'


export const WEB3_CONNECT = async(setIsConnecting, setIsConnected) => { 
  //setIsConnected(true)

  //connect wallet
  const ConnectWallet = async() => {
    const connected = await onboard.walletSelect();
    if(connected){
      await onboard.walletCheck();
      await logAddress();

      setIsConnected(true);
      setIsConnecting(false);

      console.log("Set state true!")
      
      //await interactContractTest(); 
    }
    else {
      setIsConnected(false);
      setIsConnecting(false);

      console.log("Wallet did not connect");
    }
  }
  ConnectWallet();

  return(null);
}

export const LogAddress = async () => {
  await logAddress();
}

