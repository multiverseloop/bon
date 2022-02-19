import React, { useState, useEffect, Component } from 'react';
import { Alert} from 'react-bootstrap';
import ResolvedCP from './resolvedCP'
import PromisePTP from './promisePTP'
import PaymentSuccess from './PaymentSuccess';





export default function resolvedCP(props) {
      console.log(props);
      const collectionStatus = props.status
      const CPDate = props.resolvedData.CPDate
      const PTPDate = props.resolvedData.PTPDate
      const Payment_Date = props.resolvedData.Payment_Date
      console.log(PTPDate);
 
        return  (
          <div>
          {collectionStatus == "CONFIRMED_PAYMENT" && (<ResolvedCP date={CPDate}/>)}
          {collectionStatus =="PTP" && (<PromisePTP date={PTPDate}/>)}
          {collectionStatus =="PAYMENT_COMPLETE" && (<PaymentSuccess date={Payment_Date}/>)}
          </div>
          );
}
