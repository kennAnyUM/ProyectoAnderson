import React, { Component } from 'react';
import $ from 'jquery';
import './Block_User.css';
import Navigation from '../components/Navigation';
import { parties } from '../components/bd/party.json';
import BlockIcon from '@material-ui/icons/Block';

class AddArea extends React.Component {

    constructor(props) {
        super();
        this.state = {
            parties
        }

        super(props);

        $(document).ready(function () {
            $("#myInput").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });
    }


    render() {
        const partiesTable = this.state.parties.map((party) => {
            return (
                <tr>
                    <th scope="row">{party.nombre}</th>
                    <td>{party.apellido}</td>
                    <td>{party.correo}</td>
                    <td>{party.area}</td>
                    <td><button class="btn btn-danger  " type="submit"><BlockIcon />  Bloquear</button></td>
                </tr>

            )
        })

        return (
            <div className="container ">
                <Navigation />

                <br />
                <br />


                <div className="container p-3 mt-4 ">


                    <div class="btn-group  btn-block" id="btnMenu">
                        <a href="#" class="btn btn-primary">Agregar</a>
                        <a href="#" class="btn btn-primary">Eliminar</a>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>



                </div>


                <div className="container table-responsive " id="main_div">
                   
                </div>
            </div>
        );
    }
}
export default AddArea;
