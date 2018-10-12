import React from 'react';
class fotoPerfil extends React.Component{
    render(){
        return(
            <img src={require("./imagenes/perfil.jpg")} width="45px" height="45px" className="img"></img>
        );
    }
}
export default fotoPerfil;