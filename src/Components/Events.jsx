import { useState } from 'react';
import bground4 from '../Images/bground4.jpg';
import Button from './Button';
import '../Styles/App.css';
export default function Events() {
    const [booking, setBooking] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);

    const sendReq = () => {

        setDone(true)
        fetch('https://fsdev-studio.herokuapp.com/subscribe', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,

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
        <section>
            <h2>Subscribed</h2>
            <Button
                baseColor='blue'
                name='Back'
                handleClick={() => setDone(false)} />
        </section>
    ) : (
        <section>
            <h2>Upcoming Events</h2>
            <p>From time to  time we host events either online or in small groups
                if you would like to jin our miling list and be notified of upcoming events
                then please subscribe below
            </p>
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignContent: 'center',
                    flexWrap: 'wrap-reverse',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <input
                            style={{ width: 200, height: 30, margin: 20 }}
                            type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
                        <input
                            style={{ width: 200, height: 30, margin: 20 }}
                            type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <Button
                        baseColor='green'
                        name='Subscribe'
                        handleClick={() => sendReq()} />


                </div>
            </section>
        </section>
    )

    /*
        return (
    
            booking !== null ?
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'gray',
                    margin: 20,
                    padding: 30
                }}>
                    <h1>Book your place at {booking} <small>@ only R350 a ticket</small></h1>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'space-between',
                    }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50%'
                            }}>
                            <h2> Agenda </h2>
                            <span>Front end</span>
                            <span>Backend</span>
                            <span>Data layers</span>
                            <span>tooling</span>
                            <span>Front end</span>
                            <span>Backend</span>
                            <span>Data layers</span>
                            <span>tooling</span>
    
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <input
                                style={{ width: 200, height: 30, margin: 20 }}
                                type="text" placeholder="Your name" />
                            <input
                                style={{ width: 200, height: 30, margin: 20 }}
                                type="email" placeholder="Your email" />
                            <button
                                style={{ width: 200, height: 30, margin: 20 }}
                                onClick={() => setBooking(null)}
                            >Back</button>
                            <button style={{ width: 200, height: 30, margin: 20 }}>Confirm</button>
    
                        </div>
    
                    </div>
                </div>
                :
                <>
                    <h1>Upcoming Events</h1>
                    <section
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignContent: 'center',
                            flexWrap: 'wrap-reverse',
                        }}
                    >
    
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                border: '1px solid blue',
                                padding: 100,
                                background: 'blue',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                color: 'azure',
                                transform: 'skew(15deg)'
                            }}
                        >
                            <p>fsdevSummit October 2021</p>
    
                            <p>Date : *****</p>
    
                            <p>Venue : **** ****</p>
    
                            <button onClick={() => setBooking('fsdevSummit October 2021')}>Book</button>
    
    
                        </div>
    
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                border: '1px solid blue',
                                padding: 100,
                                background: 'blue',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                color: 'azure',
                            }}
                        >
                            <p>fsdevSummit November 2021</p>
    
                            <p>Date : </p>
    
                            <p>Venue : **** ****</p>
    
                            <button onClick={() => setBooking('fsdevSummit November 2021')}>Book</button>
    
    
                        </div>
    
    
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                border: '1px solid blue',
                                padding: 100,
                                background: 'blue',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                color: 'azure',
                                transform: 'skew(-15deg)'
                            }}
                        >
                            <p>fsdevSummit January 2022</p>
    
                            <p>Date : 8888</p>
    
                            <p>Venue : 8888</p>
    
                            <button onClick={() => setBooking('fsdevSummit January 2022')}>Book</button>
    
    
                        </div>
    
    
                    </section>
    
                </>
    
        )
    */
}