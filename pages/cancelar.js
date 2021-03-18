import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const save = () => alert("usted a cancelado la cita" + value.toString());
  return (
    <div className={styles.container}>
      <Head>
        <title>Cancelacion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Cancelacion de cita  
        </h1>

        <p className={styles.description}>
          Cancele su cita , diganos el motivo.{' '}
        </p>

        
        <a  className={styles.card}>
            <p>su cita estaba prevista para </p>
            <p>12/2/2021 a las 2:00 pm</p>
          </a>

          <label >Motivo:</label>

          <textarea rows="10" cols="70">
            Porfavor diganos porque desea cancelar.
          </textarea>

         
         <button onClick={save} >Guardar</button>



        
      </main>

      
    </div>
  )
}
