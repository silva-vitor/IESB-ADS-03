'use client'

import { Carousel } from "react-bootstrap";
import Pagina from "./components/Pagina";
import './styles.css'; // Certifique-se de importar o arquivo CSS

// Componente para exibir imagens no carrossel
function ExampleCarouselImage({ src, alt }) {
  return (
    <img
      className="d-block custom-carousel-image"
      src={src}
      alt={alt}
    />
  );
}

export default function Home() {
  return (
    <>
      <Pagina titulo="CarPro"></Pagina>
      
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage 
            src="https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/2YX7NH32IZMWJNDXPBN4EZKKXE.jpg?auth=387fdc709d52978b4ddc1bfc799315a5a3a57b8e3ed18073c8fda97ce7d71269&width=780&height=652"
            alt="First slide" 
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            src="https://st.depositphotos.com/1000291/2601/i/450/depositphotos_26014755-stock-photo-car-selling-or-auto-buying.jpg"
            alt="Second slide" 
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage 
            src="https://i.ytimg.com/vi/r1kcudXcs6A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCi_tlscvCkTFSCdjfm016A2uBzJA"
            alt="Third slide" 
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
