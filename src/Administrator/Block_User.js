import React, { Component } from 'react';
import $ from 'jquery';
import './Block_User.css';

class navigatiom extends React.Component {

    constructor(props) {
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
    /*constructor(props) {
      super(props);
      this.state = { forecasts: [], loading: true };
  
      fetch('api/SampleData/WeatherForecasts')
        .then(response => response.json())
        .then(data => {
          this.setState({ forecasts: data, loading: false });
        });
    }*/
    render() {

        return (

            <div className="container ">
                <input className="form-control" id="myInput" type="text" placeholder="Search.."></input>
                <div className="container table-responsive " id="main_div">
                    <table className="table table-hover table-condensed " id="table_id">
                        <thead>
                            <tr>
                                <th className="size" scope="col">Nombre</th>
                                <th className="size" scope="col">Correo</th>
                                <th className="size" scope="col">Área</th>
                                <th className="size" scope="col">Botón</th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td><button >Bloquear</button></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>ana</td>
                                <td>beto</td>
                                <td><button >Bloquear</button></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>pedro</td>
                                <td>joven</td>
                                <td><button >Bloquear</button></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>sapo</td>
                                <td>Otto</td>
                                <td><button >Bloquear</button></td>
                            </tr>
                            {/*forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
         )*/}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default navigatiom;
