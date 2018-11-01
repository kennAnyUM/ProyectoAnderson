import React from 'react';
import './footer.css';
class footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid navbar form-inline" id="footer-main">
                <div className="mr-sm-1"><img src={require("./imagenesImpesa/IMPESA LOGO2.png")} width="80" height="20"></img></div>
                <p className="my-2 my-sm-0">© 2018 IMPESA® Todos los derechos reservados.<br/>Anderson® es una marca registrada de IMPESA.</p>
                <div className="ml-2"><img src={require("./imagenesImpesa/ICONO ANDERSON1.png")} width="40" height="40"></img></div>
            </footer>
        )
    }
}
export default footer;