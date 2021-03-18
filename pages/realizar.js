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
        <title>Realizar Cita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Realize su cita   
        </h1>

        <p className={styles.description}>
          selecione el dia y la hora de la cita {' '}
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
