import { certificates } from "../utils/certifcates";
import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";

export function Certificate() {
  return (
    <Row>
      {certificates.map((certificate) => (
        <SwiperSlide
          key={certificate.id}
          className="flex max-w-md overflow-hidden py-5"
        >
          <div
            key={certificate.id}
            className="rounded-xl flex" // Ajuste de overflow
          >
            <img
              src={certificate.src}
              alt={certificate.name}
              className="object-cover object-top rounded-xl"
              draggable={false}
            />
          </div>
        </SwiperSlide>
      ))}
    </Row>
  );
}
