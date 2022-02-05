import { useState, useRef } from 'react';
import Footer from './Components/Footer';
import Events from './Components/Events';
//import OurWork from './Components/OurWork';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import FrontendUi from './Components/FrontendUi';
import TeamForm from './Components/TeamForm';
import './Styles/App.css';
import './Styles/fsdev.css';

function App() {
  const [showForm, setShowForm] = useState(null);
  const [h, setH] = useState('none')
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);
  const WorkRef = useRef(null);
  const EventRef = useRef(null);
  const UiRef = useRef(null);



  const scrollToContact = () => {
    setShowForm(null)
    setH('none')
    ContactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  }

  const scrollToAbout = () => {

    setH('none')
    AboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  }
  const scrollToEvents = () => {

    setH('none')
    EventRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  }
  const scrollToUi = () => {

    setH('none')
    UiRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  }



  return (
    <div className="App">

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 'auto', display: 'flex', flexDirection: 'column', height: 40, background: '#01183d' }}>
        <span style={{ fontSize: 24, marginTop: 5, fontWeight: 'bold', fontFamily: 'monospace' }}>fsdevStudio</span>

        {
          h === 'flex' ? <span className="openNav" style={{ color: 'white' }} onClick={() => setH(h === 'flex' ? 'none' : 'flex')}>&times;
          </span> : <span className="openNav" style={{ color: 'white' }} onClick={() => setH(h === 'flex' ? 'none' : 'flex')}>&#9776;
          </span>
        }

      </div>
      <div style={{ position: 'fixed', top: 40, left: 0, right: 0, bottom: 'auto', display: h, flexDirection: 'column', height: 'auto', background: '#01183d' }}>
        <span className='navSpan' onClick={() => scrollToAbout()}>About</span>
        <span className='navSpan' onClick={() => scrollToContact()}>Create</span>
        <span className='navSpan' onClick={() => scrollToEvents()}>Events</span>
        <span className='navSpan' onClick={() => scrollToUi()}>Frontend UI Components</span>

      </div>

      <nav className='shadow-2'>
        <span className='navLeft' onClick={() => AboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>About</span>
        <span onClick={() => scrollToContact()}>Create</span>
        <span onClick={() => EventRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Events</span>
        {/* <span onClick={() => WorkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Our Work</span> */}
        <span className='navRight' onClick={() => UiRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Frontend UI Components</span>
      </nav>

      <div ref={ContactRef}
        className="contact shadow-2"
        style={{ paddingTop: 100 }}
      >
        {showForm == null ?
          <ContactUs
            setShowForm={(val) => setShowForm(val)} />
          :
          <TeamForm
            setShowForm={(val) => setShowForm(val)}
            showForm={(val) => showForm(val)}
          />
        }
      </div>

      <div ref={AboutRef}
        className="App-header shadow-2"
        style={{ paddingTop: 100 }}
      >
        <About />
      </div>



      {/* <div ref={WorkRef}
        style={{ paddingTop: 100 }}
      >
        <OurWork />
      </div> */}

      <div ref={UiRef}
        className="App-header shadow-2"
        style={{ paddingTop: 100 }}
      >
        <FrontendUi />
      </div>

      <div ref={EventRef}
        className="App-header shadow-2"
        style={{ paddingTop: 100 }}
      >
        <Events />
      </div>

      <Footer />
    </div>
  );
}

export default App;
