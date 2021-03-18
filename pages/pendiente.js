import Head from 'next/head'
import styles from '../styles/Home.module.css'

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

      
    </div>
  )
}
