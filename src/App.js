import { useEffect, useState } from 'react'
import { Formulario } from './components/Formulario'
import './App.css'
import { Cita } from './components/Cita';

export const App = () => {

    const citasIniciales =  JSON.parse(localStorage.getItem('citas')) || [] ;

    const [ citas, setCitas ] = useState(citasIniciales);

    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas))
    }, [citas])

    const crearCita = (cita) => {
        setCitas([
            ...citas,
            cita
        ])
    }

    const eliminarCita = ( id ) => {
        
        const nuevasCitas = citas.filter( cita => cita.id !== id );
        setCitas( nuevasCitas )

    }

    return (
        <>
            <h1>Administrador de Pacientes</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario 
                            crearCita = { crearCita }
                        />
                    </div>

                    <div className="one-half column">
                        {
                            citas.length === 0 
                            ? <h2> No hay citas </h2>
                            : <h2> Administra tus citas </h2>
                        }
                        { citas.map( cita => (
                            <Cita 
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
