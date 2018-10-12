import React from 'react';
import './estilo.css';
import Foto from './FotoPerfil';

class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <nav>
                <div className="dropdown">
                    <a className="button" onClick={this.showDropdownMenu}><img src={require("./imagenes/menu2.png")} width="30px" height="30px" ></img> </a>
                    <a className= "perfil"><Foto/></a>
                    <p className="name">Maria Jose Brenes</p>
                    <p className="mail">mariaJB1996@impesa.net</p>
                    {this.state.displayMenu ? (
                        <ul>
                           
                            <li><a href="#Manage Pages">Manage Pages</a></li>
                            <li><a href="#Create Ads">Create Ads</a></li>
                            <li><a href="#Manage Ads">Manage Ads</a></li>
                            <li><a href="#Activity Logs">Activity Logs</a></li>
                            <li><a href="#Setting"><img src={require("./imagenes/setting.png")} width="30px" height="30px" ></img>    Setting</a></li>
                            <li><a href="#Log Out"><img src={require("./imagenes/log-out.png")} width="25px" height="25px" ></img>  Log Out</a></li>
                        </ul>
                    ) :
                        (
                            null
                        )
                    }

                </div>
            </nav>
        );
    }
}

export default Dropdown;