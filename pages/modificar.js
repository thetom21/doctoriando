import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import 'rc-time-picker/assets/index.css';

export default function Home() {
  const [value, onChange] = useState(new Date());
  const save = () => alert("usted selecciono" + value.toString());
  return (
    <div className={styles.container}>
      <Head>
        <title>Modificacion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Modificacion de cita
        </h1>

        <p className={styles.description}>
          selecione la fecha que sea para que la cita sea modificada{' '}
        </p>

        <Calendar
        onChange={onChange}
        value={value}
        minDate={new Date()}
      />
        <TimePicker
        showSecond={false} 
        use12Hours={true}
        placeholder={"selecione la hora"}
        allowEmpty={false}
        minuteStep={30}
        />
        

      <button onClick={save} >Guardar</button>

         
      </main>

      
    </div>
  )
}
