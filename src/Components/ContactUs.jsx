export default function ContactUs({ setShowForm }) {
    return (
        <section>
            <h1>
                Welcome to <code>Full Stack Developer Studio</code>
            </h1>
            <h2 className="App-link">
                What do you want to build ?
            </h2>
            <div>
                <div className="services_catalogue" onClick={() => setShowForm('web-app')}>Web App</div>
                <div className="services_catalogue" onClick={() => setShowForm('mobile-app')}>Mobile App</div>
                <div className="services_catalogue" onClick={() => setShowForm('desktop-app')}>Desktop App</div>
                <div className="services_catalogue" onClick={() => setShowForm('backend-api')}>Backend API</div>
                <div className="services_catalogue" onClick={() => setShowForm('not-yet-sure')}>Not yet sure</div>
            </div>
        </section>
    )

}