'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Page() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data);
        });
    }, []);

    return (
        <Pagina titulo="Disney Carrossel">
            <Carousel>
                {personagens.map((item, setPersonagens) => (
                    <Carousel.Item key={setPersonagens} interval={900}>
                        <img style={{ height: 800 , width: 700 }}
                            src={item.imageUrl}
                            alt={item.name}
                            className="d-block w-100"
                        />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description || "No description available."}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Pagina>
    );
}
