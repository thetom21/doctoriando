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
          Registrese{' '}
        </p>
        <p className={styles.type}>
          A continuacion ingrese la informacion que se requiere
        </p>

        <label for="fname">Nombre:</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="lname">Apellido:</label>
        <input type="text" id="lname" name="lname"></input>
        <label for="email"> Email:</label>
        <input type="email" id="email" name="email"></input>
        <label for="pwd">Contrasena:</label>
        <input type="password" id="pwd" name="pwd"></input>
        <label for="pwd">Confirme su Contrasena:</label>
        <input type="password" id="pwd" name="pwd"></input>
        
        <label For="birthday">Fecha de Nacimiento:</label>
        <form action="/action_page.php">
        <input type="date" id="birthday" name="birthday" min="1940-01-01"
        max={new Date()} />
        </form>
        <label for="phone">Telefono:</label>
        <input type="tel" id="phone" name="phone" 
        placeholder="809-555-4554" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" 
        required></input>

            
       
        <a href="/login">entrar</a>
      

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
