import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doctoriando</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido <a href="/info">Doctoriando</a>
        </h1>

        <p className={styles.title}>
          {' '}
        </p>
        <code className={styles.code}></code>
        <p className={styles.type}>si ya tiene una cuenta 
          {' '}
        </p>
        <a className={styles.card}
        
        href="/login">Login</a>

         <p className={styles.type}>si no tiene cuenta
          {' '}
          </p>

         <a className={styles.card}
         
        href="/registrarse">Registrate</a>
        

      

       </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
