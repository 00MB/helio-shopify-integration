import React, { useEffect, useState } from 'react';
import {
  ErrorPaymentEvent,
  HelioPay,
  PendingPaymentEvent,
  SuccessPaymentEvent,
  HelioApiAdapter,
} from '@heliofi/react';

import './styles/style.scss';

const App = () => {
  const [paymentId, setPaymentId] = useState<string | null>(
    'c5d4dd5d-d880-4b9f-a918-efb931a3aa1e'
  );


  const getListCurrencies = () => {
    HelioApiAdapter.listCurrencies('devnet')
      .then((res) => {
        // console.log(2, res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  useEffect(() => {
    getListCurrencies()
  }, []);

  return (
    <>
      {/* <input
        type="text"
        value={paymentId}
        onChange={(e) => setPaymentId(e.target.value)}
      /> */}
      <HelioPay
        cluster='devnet'
        payButtonTitle='PAY'
        paymentRequestId='f137617c-88fd-4911-825e-9be3ecd2492d'
        supportedCurrencies={["USDC", "SOL", "DUST", "BOO", "HALO"]}
        totalAmount={1}
      />
      {/* <HelioPay
        cluster="devnet"
        paymentRequestId={paymentId}
        onSuccess={function (event: SuccessPaymentEvent): void {
          console.log('onSuccess', event);
        }}
        onError={function (event: ErrorPaymentEvent): void {
          console.log('onError', event);
        }}
        onPending={function (event: PendingPaymentEvent): void {
          console.log('onPending', event);
        }}
        onStartPayment={function (): void {
          console.log('onStartPayment');
        }}
        supportedCurrencies={['USDC', 'SOL', 'DUST', 'BOO', 'HALO']}
        totalAmount={0.145}
      /> */}
    </>
  );
};

export default App;
