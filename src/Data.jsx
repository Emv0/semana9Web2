import PropTypes from 'prop-types';

function Data(props){
    return(
        <div className="data">
            <p>Nombre: {props.name}</p>
            <p>Apellido: {props.lastName}</p>
            <p>Edad: {props.age}</p>
            <p>Registrado: {props.isData ? "Yes":"No"}</p>
        </div>
    );
}
Data.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    edad: PropTypes.number,
    registrado: PropTypes.bool,
} 
Data.defaultProps = {
    name: "No aplica",
    lastName: "No aplica",
    edad: 0,
    registrado: false,
}

export default Data;