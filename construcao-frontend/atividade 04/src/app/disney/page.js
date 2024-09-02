'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    const [personagens, setPersonages] = useState([]) 
    useEffect(() => {
        apiDisney.get('character').then(resultado =>{
            setPersonages(resultado.data.data)
        })
    }, [])
    return (
        <Pagina titulo="Disney">
            {personagens.map(item => (
                        <p>{item.name}</p>
                    ))}
        </Pagina>

    )
}