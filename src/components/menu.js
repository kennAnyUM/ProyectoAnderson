
import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { Redirect } from 'react-router-dom'

import { Link } from "react-router-dom";

class Menu extends Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/IncidentAssignment' />
        }
    }

    render() {
        return (
            <div className="list-group mt-4" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                    <br />
                    <br />
                    <Button color="primary" variant="extendedFab" aria-label="Add" data-toggle="list" href="" onClick={this.setRedirect}>
                        <AddIcon />  
                        <Link to="/InsertarIncidencia">Reportar incidencia</Link>
                    </Button>
                    <br /> <br /> <br />
                </a>
                <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#/components/incidentAssignment.js" role="tab" aria-controls="home"> INICIO</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="myIncidents">Mis incidencias</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="History">Histprial de incidencias</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Configuracion</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" >
                   
                    <br /><br /> <br /><br />  <br /> </a>
            </div>
        )
    }
}
export default Menu;