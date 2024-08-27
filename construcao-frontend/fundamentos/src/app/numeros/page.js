'use client'

import Pagina from "@/app/components/Pagina";

import React, { useState } from 'react';

export default function Contador() {
    // Estado para armazenar o número
    const [numero, setNumero] = useState(0);

    // Função para incrementar o número
    const Almentar = () => {
        setNumero(numero + 1);
    };

    // Função para decrementar o número
    const Diminuir = () => {
        setNumero(numero - 1);
    };

    return (
        <Pagina titulo= "Numeros">
            <div style={{ textAlign: 'center', marginTop: '50px' }}>


                <div>
                    <button onClick={Almentar} style={{ marginRight: '10px', padding: '10px 20px' }}>-</button>

                    <h2>{numero}</h2>
                    
                    <button  onClick={Diminuir} style={{ padding: '10px 20px' }}>+</button>
                </div>
            </div>
        </Pagina>
    );
}
