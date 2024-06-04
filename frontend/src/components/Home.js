'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";


export default function Home() {
  return (
    <Carousel data-bs-theme="dark" className='row'>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src="/slide1.jpg"
        width={500}
        height={250}
        alt="First slide"
      />
      <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src="/slide2.jpg"
        width={500}
        height={250}
        alt="Second slide"
      />
      <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src="/slide3.jpg"
        width={500}
        height={250}
        alt="Third slide"
      />
      <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}
