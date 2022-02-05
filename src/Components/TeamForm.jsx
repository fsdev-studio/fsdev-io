import React, { useState } from 'react';
import Button from './Button';
export default function TeamForm({ showForm, setShowForm }) {
  const [done, setDone] = useState(false);

  const [projectName, setProjectName] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientMobile, setClientMobile] = useState('');
  const [clientBrief, setClientBrief] = useState('');
  const [contactPref, setContactPref] = useState('');





  const styles = {
    inputText: {
      margin: 10,
      width: window.innerWidth < 600 ? (window.innerWidth / 10) * 8 : (window.innerWidth / 10) * 5,
      padding: 10,
    },
    inputTextarea: {
      margin: 10,
      width: window.innerWidth < 600 ? (window.innerWidth / 10) * 8 : (window.innerWidth / 10) * 5,
      height: 80,
      padding: 10
    },
    backBtn: {
      width: 200,
      height: 100,
      backgroundColor: 'red',
      color: 'white'
    }
  }

  const sendReq = () => {
    setDone(true)
    fetch('https://fsdev-studio.herokuapp.com/new-request/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projectType: showForm,
        projectName: projectName,
        clientName: clientName,
        clientEmail: clientEmail,
        clientMobile: clientMobile,
        clientBrief: clientBrief,
        contactPref: contactPref
      })
    })
      .then((response) => {
        if (response) {
          setDone(true)
        }
        else {
          alert('oh no!')
        }
      })

      .catch((error) => {
        console.error(error);
      });
  }


  return done ? (
    <>
      <h1>Thank you, we will contact you soon</h1>
      <h1>Thank you, we will contact you soon</h1>
      <h1>Thank you, we will contact you soon</h1>
      <h1>Thank you, we will contact you soon</h1>
      <h1>Thank you, we will contact you soon</h1>
      <h1>Thank you, we will contact you soon</h1>
      <h1>Thank you, we will contact you soon</h1>
    </>
  ) : (

    <section>
      <h4>Please, provide us with a few details and we will contact you back. </h4>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}>

        <input
          style={styles.inputText}
          type="text" placeholder="Project Name" onChange={(e) => setProjectName(e.target.value)} />



        {
          // showForm === 'mobile-app' ? (
          //   <>
          //     <h4>Platforms</h4>
          //     <section style={{ fontSize: 18 }}><input type="checkbox" />Android</section>
          //     <section style={{ fontSize: 18 }}><input type="checkbox" />iOS</section>
          //     {/* <section style={{ fontSize: 18 }}><input type="checkbox" />Windows</section> */}

          //   </>
          // ) : null
        }


        {/* <select
          style={{
            margin: 10,
            width: window.innerWidth < 600 ? (window.innerWidth / 10) * 6 : (window.innerWidth / 10) * 3,
            padding: 10,
          }}
          onChange={(e) => alert(e.target.value)}>
          <option value={null}>Choose a template</option>
          <option value="team">Driver App</option>
          <option value="diy">Delivery App</option>
          <option value="diy">Ticket App</option>
          <option value="diy">? App</option>
          <option value="diy">None</option>
        </select> */}



        <input
          style={styles.inputText}
          type="text" placeholder="Your Name" onChange={(e) => setClientName(e.target.value)} />
        <input
          style={styles.inputText}
          type="text" placeholder="Your Email" onChange={(e) => setClientEmail(e.target.value)} />
        <input
          style={styles.inputText}
          type="text" placeholder="Your Mobile No" onChange={(e) => setClientMobile(e.target.value)} />

        <textarea
          style={styles.inputTextarea}
          placeholder="Brief details about your project" onChange={(e) => setClientBrief(e.target.value)} />
      </section>


      {/* <b style={{ fontSize: 16 }}>How would you like us to contact you ?</b>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <section style={{ fontSize: 14 }}><input type="radio" value="email" onChange={(e) => setContactPref(e.target.value)} />Email</section>
        <section style={{ fontSize: 14 }}><input type="radio" value="mobile" onChange={(e) => setContactPref(e.target.value)} />Mobile (Call or SMS)</section>
      </div> */}

      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: '10%',
          marginRight: '10%',
          padding: 10,
          width: '80%'
        }}
      >



        <Button
          baseColor='red'
          name='Back'
          handleClick={() => setShowForm(null)} />

        <Button
          baseColor='green'
          name='Continue'
          handleClick={() => sendReq()} />

      </section>

    </section>


  )

}