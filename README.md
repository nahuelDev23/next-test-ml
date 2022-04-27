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


### prueba vendedor 

```json
{
    "id": 1113745072,
    "nickname": "TESTOIXHYP17",
    "password": "qatest9939",
    "site_status": "active",
    "email": "test_user_38660366@testuser.com"
}
```
### prueba comprador 

```json
{
    "id": 1113745232,
    "nickname": "TEST96JL2NTW",
    "password": "qatest803",
    "site_status": "active",
    "email": "test_user_97489656@testuser.com"
}
```