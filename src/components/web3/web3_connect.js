import {useEffect, useState} from 'react';
import {onboard, logAddress, interactContractTest} from './onboard'

function WEB3_CONNECT(){ 
  
  //connect wallet
  const ConnectWallet = async() => {
    const connected = await onboard.walletSelect();
    if(connected){
      await onboard.walletCheck();
      await logAddress();
      await interactContractTest(); 
    }
  }
  ConnectWallet();

  return(null);
}

export default WEB3_CONNECT;
