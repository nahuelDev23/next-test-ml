import type { NextPage } from 'next'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  const addCheckout = () => {
    const mp = new window.MercadoPago('TEST-e566a4da-84c5-423a-ae15-fa629a55dcb7', {
      locale: 'es-AR'
    });

    mp.checkout({
      preference: {
        id: '264687639-614e5780-f99c-4716-95f0-eb6c9bb43acc',
      },
      render: {
        container: `#button`, 
        label: 'Pagar amigacho',
      },
    });
  }

  
  return (
    <div className={styles.container}>
      <button id='button'/>
      {/* addCheckout capaz no hace falta en personalizado */}
      <Script src="https://sdk.mercadopago.com/js/v2" onLoad={addCheckout}/>
    </div>
  )
}

export default Home
