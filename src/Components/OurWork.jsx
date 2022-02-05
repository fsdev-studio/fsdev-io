export default function OurWork() {

    return (

        <section
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignContent: 'center',
                flexWrap: 'wrap-reverse',
                background: 'lightgray',
                padding: 100,
            }}>

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
                }}>
                <p>CYA</p>
                <p>Description</p>
                <p>Platforms</p>

                <button>Android</button>
                <button>iOS</button>
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
                <p>Smugg</p>

                <p>Description</p>
                <p>Platforms</p>


                <button>Android</button>
                <button>iOS</button>


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
                <p>Buy&Sell</p>

                <p>Description</p>
                <p>Platforms</p>

                <button>Web</button>



            </div>


        </section>

    )

}