


'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Page() {
    const [personagens, setPersonages] = useState([]) 
    useEffect(() => {
        apiDisney.get('character').then(resultado =>{
            setPersonages(resultado.data.data)
        })
    }, [])
    return (
        <Pagina titulo="Disney Tabela">

            <Table className="mt-3" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.imageUrl} height={100} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>




        </Pagina>
    )
}