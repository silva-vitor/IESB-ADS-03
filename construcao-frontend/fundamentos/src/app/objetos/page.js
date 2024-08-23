'use client'

import Pagina from "@/app/components/Pagina";


export default function objetos() {
    const carros = [
        { marca: 'volks', modelo: 'gol', cor: 'preto', foto: '' },
        { marca: 'fiat', modelo: 'palio', cor: 'azul', fotos: '' },
        { marca: 'fiat', modelo: 'uno', cor: 'branco', fotos: '' },
        { marca: 'fiat', modelo: 'celta', cor: 'vermelho', fotos: '' },
        { marca: 'fiat', modelo: 'camaro', cor: 'chumbo', fotos: '' },
    ]; 




    return (
        <Pagina titulo="objetos">


            {carros.map(item => (
                <p>{item.marca}</p>
            ))}

         
        </Pagina>
    )
}