
'use client'


import { useEffect, useState } from "react";
import Pagina from "./components/Pagina";
import apiMovie from "@/services/apiMovies";


export default function Page() {
    const [filmes, setfilmes] = useState([])
    useEffect(() => {
        apiMovie.get('movie/popular').then(resultado => {
            setfilmes(resultado.data.results)
        })
    }, [])
    return (
        <Pagina titulo="filmes">
            {filmes.map(item => (
                <p>{item.title}</p>
            ))}
        </Pagina>

    )
}