import { useState } from "react";
import { useForm } from "../hooks/useForm"

export const Formulario = ({ crearCita }) => {
    
    const [ form , handleInputChange, reset] = useForm({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    

    const [error, setError] = useState(false);
    const [counter, setCounter] = useState(0);

    const { mascota, dueño, fecha, hora, sintomas } = form

    const handleSubmit = (e) => {

        e.preventDefault()
        
        // Validar
        if( mascota.length < 2 || dueño.length < 2 || fecha === '' || hora === '' ){
            setError(true);
            return;
        }
        setError(false)
        
        // Asignar un ID
        form.id = counter;

        // Crear la cita
        crearCita(form)

        reset();
        setCounter( counter + 1 );
    }


    return (
        <>
            <h2>Crear Cita</h2>    

            { error
                ? <p className='alerta-error'>Todos los campos son obligatorios </p>
                : null
            }       

            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input 
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre de la Mascota'
                    value={mascota}
                    onChange={handleInputChange}
                />
                
                <label>Nombre Dueño</label>
                <input 
                    type='text'
                    name='dueño'
                    className='u-full-width'
                    placeholder='Nombre del Dueño'
                    value={dueño}
                    onChange={handleInputChange}
                />

                <label>Fecha</label>
                <input 
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    value={fecha}
                    onChange={handleInputChange}
                />
                
                <label>Hora</label>
                <input 
                    type='time'
                    name='hora'
                    className='u-full-width'
                    value={hora}
                    onChange={handleInputChange}
                />

                <label>Sintomas</label>
                <textarea 
                    name="sintomas" 
                    cols="30" 
                    rows="10"
                    className='u-full-width'
                    value={sintomas}
                    onChange={handleInputChange}
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >
                    AGREGAR CITA
                </button>
            </form>
        </>
    )
}
