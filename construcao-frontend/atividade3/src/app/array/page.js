'use client'

import Pagina from "../components/Pagina";


export default function Array() {
    const carros = ['Gol', 'Palio', 'Uno', 'Celta', 'Camaro'];
   



    return (
        <Pagina titulo="Página de Array">
          

            {carros.map(item => (
                <p>{item}</p>
            ))}

            <ul>
                {carros.map(item => (
                    <li>{item}</li>
                ))}

            </ul>
        </Pagina>
    )
}

