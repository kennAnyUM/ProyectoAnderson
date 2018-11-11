import React from 'react';
import './passStyle.css';

class recover extends React.Component {
    state = {
        email: '',
        password: '',
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const { email, password } = this.state;

        return (

            <div className="container" id="div_principal">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Recuperar Contraseña</h2>

                    <div className="form-group">
                        <input type="text" name="email" className="form-control" placeholder="Correo Electronico" value={email} onChange={this.onChange} autoFocus />
                        <span className="help-block"></span>
                    </div>

                    <div className="form-group">
                        <input type="text" name="emailConfim" className="form-control" placeholder="Confirmar Correo Electronico" value={password} onChange={this.onChange} />
                        <span className="help-block"></span>
                        <button className="btn  btn-primary disable btn-block " type="submit">Enviar</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default recover;

