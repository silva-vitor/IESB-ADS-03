


'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Page() {
    const [personagens, setPersonages] = useState([])
    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonages(resultado.data.data)
        })
    }, [])
    return (
        <Pagina titulo="Disney/Tabela">
            <Table className="mt-3">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map((item, setPersonages) => (
                        <tr key={item._id || setPersonages}>
                            <td>{setPersonages + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.imageUrl}  style={{ width: '50px', height: '50px' }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}