import Head from 'next/head'
import styles from '../styles/Home.module.css'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Citas Pendientes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Cita Pendiente  
        </h1>

        <p className={styles.description}>
          Las Citas que tiene pendiente son {' '}
        </p>

        <div className={styles.grid}>
          
        </div>
      </main>
      <footer className={styles.footer}>
          Creados por Ingenieros de la PUCMM
           <br></br>
          Asignado por el profesor Jose Luis Alonso Ochoa
          <img className={styles.logo} />
      </footer>
      
    </div>
  )
}
