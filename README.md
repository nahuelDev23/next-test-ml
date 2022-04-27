5031 7557 3453 0604	

## checkout personalizado

[checkout personalizado](https://www.mercadopago.com.ar/developers/es/docs/checkout-api/payment-methods/receiving-payment-by-card)

```js
  useEffect(()=>{
     const script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'https://sdk.mercadopago.com/js/v2';
     script.id = 'ml-script';
     script.addEventListener('load', addCheckout); // Cuando cargue el script, se ejecutará la función addCheckout
     document.body.appendChild(script);
   },[])
```