import { IconContext } from "react-icons";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';

export default function Footer() {

    return (

        <div style={{
            position: 'relative',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#01183d',
            height: 100,
            marginTop: 100,
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap-reverse',
            padding: 20,
            justifyContent: 'space-evenly'

        }}>




            <section style={{

                color: 'white',
                display: 'flex',
                flexDirection: 'column-reverse',
                padding: 20,

            }}>
                <section>
                    Brytspark Labs &copy; 2021

                </section>

                <section>
                    <IconContext.Provider value={{
                        color: "azure",
                        size: 35,
                        className: "icons"
                    }}>

                        <FaFacebookSquare onClick={() => window.open('https://www.facebook.com/fsdev.studio')} />

                        <FaLinkedin onClick={() => window.open('https://www.linkedin.com/showcase/full-stack-developer-studio')} />

                        <FaTwitterSquare onClick={() => window.open('https://twitter.com/fsdevStudio')} />

                        <FaGithubSquare onClick={() => window.open('https://github.com/fsdev-studio')} />

                        <FaInstagramSquare onClick={() => window.open('https://www.instagram.com/fsdevcoza/')} />

                    </IconContext.Provider>
                </section>
            </section>
            <section style={{

                color: 'white',
                display: 'flex',
                flexDirection: 'column-reverse',
                padding: 20,

            }}>

                <a target="_blank" href='https://fsdev.studio/privacy.html'>Privacy Policy</a>
                {/* <a href='https://fsdev.studio/privacy.html'>Terms & Conditions</a> */}



            </section>

        </div>

    )
}