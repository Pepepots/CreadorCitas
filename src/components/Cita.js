
export const Cita = ({ cita, eliminarCita }) => {
    
    const { mascota, dueño, fecha, hora, sintomas, id } = cita;

    // const handleClick = ( id ) => {
    // }

    return (
        <>
            <div className="cita">

                <p> Mascota: <span>{ mascota }</span> </p>
                <p> Dueño: <span>{ dueño }</span> </p>
                <p> Fecha: <span>{ fecha }</span> </p>
                <p> Hora: <span>{ hora }</span> </p>
                <p> Sintomas: <span>{ sintomas }</span> </p>

                <button
                    className = "button eliminar u-full-width"
                    onClick={ () => eliminarCita( id ) }
                >
                    Eliminar &times;
                </button>

            </div>
        </>
    )
}
