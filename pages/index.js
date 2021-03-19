import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { firebaseClient } from './firebaseClient';
import 'tailwindcss/tailwind.css'

export default function Home() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
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
          Login{' '}
        </p>
        <br />
      <input 
      className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={'Email'}
      />
      <input
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={'Password'}
      />
      <hr/>
      <button className={styles.loginButton}
        onClick={async () => {
          await firebaseClient
            .auth()
            .createUserWithEmailAndPassword(email, pass);
          window.location.href = '/';
        }}
      >
        Create account
      </button>
      <button className={styles.loginButton}
        onClick={async () => {
          await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
          window.location.href = '/home';
        }}
      >
        Log in
      </button>
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