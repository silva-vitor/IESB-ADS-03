'use client'

import Pagina from "@/app/components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Page() {
    const [numero, setNumero] = useState('0')
    const Almentar = () => {
       setNumero(numero + 1);
        
    };
    const diminuir = () => {
        setNumero(numero - 1);
    };
    return (
        <Pagina titulo="Numeros">
  <Button onClick={Almentar}>+</Button>
            <h1>{numero}</h1>
            <Button onClick={diminuir}>-</Button>
        </Pagina>


    )
}