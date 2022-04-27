import type { NextPage } from 'next'
import Script from 'next/script'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const cardForm = () => {
    const mp = new window.MercadoPago('TEST-3d56aea5-b244-4108-af37-f567cbeb93be');
    const cardForm = mp.cardForm({
      amount: "100.5",
      autoMount: true,
      form: {
        id: "form-checkout",
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular de la tarjeta",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Número de la tarjeta",
        },
        cardExpirationDate: {
          id: "form-checkout__cardExpirationDate",
          placeholder: "Fecha de vencimiento (MM/YYYY)",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de seguridad",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Cuotas",
        },
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Tipo de documento",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Número de documento",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emisor",
        },
      },
      callbacks: {
        onFormMounted: error => {
          if (error) return console.warn("Form Mounted handling error: ", error);
          console.log("Form mounted");
        },
        onSubmit: event => {
          event.preventDefault();
    
          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();
    
          fetch("/api/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
              issuer_id,
              payment_method_id,
              transaction_amount: Number(amount),
              installments: Number(installments),
              description: "Descripción del producto",
              payer: {
                email,
                identification: {
                  type: identificationType,
                  number: identificationNumber,
                },
              },
            }),
          });
        },
        onFetching: (resource) => {
          console.log("Fetching resource: ", resource);
    
          // Animate progress bar
          const progressBar = document.querySelector(".progress-bar");
          progressBar.removeAttribute("value");
    
          return () => {
            progressBar.setAttribute("value", "0");
          };
        }
      },
    });
  }
  

  return (
    <div className={styles.container}>
      {/* <button id='button' /> */}
      {/* addCheckout capaz no hace falta en personalizado */}
      <form id="form-checkout" >
        <input type="text" name="cardNumber" id="form-checkout__cardNumber" />
        <input type="text" name="cardExpirationDate" id="form-checkout__cardExpirationDate" />
        <input type="text" name="cardholderName" id="form-checkout__cardholderName" />
        <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" />
        <input type="text" name="securityCode" id="form-checkout__securityCode" />
        <select name="issuer" id="form-checkout__issuer"></select>
        <select name="identificationType" id="form-checkout__identificationType"></select>
        <input type="text" name="identificationNumber" id="form-checkout__identificationNumber" />
        <select name="installments" id="form-checkout__installments"></select>
        <button type="submit" id="form-checkout__submit">Pagar</button>
        <progress value="0" className="progress-bar">Cargando...</progress>
      </form>
      <Script src="https://sdk.mercadopago.com/js/v2" onLoad={cardForm} />
    </div>
  )
}

export default Home
