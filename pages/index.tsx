import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const addCheckout = () => {
    const mp = new window.MercadoPago('TEST-e566a4da-84c5-423a-ae15-fa629a55dcb7', {
      locale: 'es-AR'
    });

    mp.checkout({
      preference: {
        id: '264687639-7ac0d096-1738-4e12-b625-969f67cc5871',
      },
      render: {
        container: `#button`, // Indica el nombre de la clase donde se mostrará el botón de pago
        label: 'Pagar amigacho', // Cambia el texto del botón de pago (opcional)
      },
    });
  }

  // useEffect(()=>{
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'https://sdk.mercadopago.com/js/v2';
  //   script.id = 'ml-script';
  //   script.addEventListener('load', addCheckout); // Cuando cargue el script, se ejecutará la función addCheckout
  //   document.body.appendChild(script);
  // },[])

  useEffect(() => {

    addCheckout()

  }, [])
  return (
    <div className={styles.container}>
      <button id='button'></button>
    </div>
  )
}

export default Home
