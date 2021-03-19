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
          Que desea relizar?{' '}
        </p>
        <code className={styles.code}></code>

        <div className={styles.grid}>
          <a href="/realizar" className={styles.card}>
            <h3>Realizar Cita &rarr;</h3>
            <p>Si no tiene ninguna cita pautada con el doctor aqui
              puede Realizar su cita.
            </p>
          </a>

          <a href="/modificar" className={styles.card}>
            <h3>Modificar Cita &rarr;</h3>
            <p>Si ya Tiene alguna cita pautada aqui podra modificar la
              fecha de la cita.
            </p>
          </a>

          <a
            href="/cancelar"
            className={styles.card}
          >
            <h3>Cancelacion De Cita &rarr;</h3>
            <p>Si ya tiene una cita pautada y desea Cancelar,dando la razon de 
              porque desea Realizarla.</p>
          </a>

          <a
            href="/pendiente"
            className={styles.card}
          >
            <h3>Visualizar Citas pendiente &rarr;</h3>
            <p>
              Para visualizar las citas futuras. 
            </p>
          </a>
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
