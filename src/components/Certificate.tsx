import { certificates } from "../utils/certifcates";
import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";

export function Certificate() {
  return (
    <Row>
      {certificates.map((certificate) => (
        <SwiperSlide
          key={certificate.id}
          className="flex max-w-md overflow-hidden"
        >
          <div key={certificate.id} className="rounded-xl h-72 flex">
            <img
              src={certificate.src}
              alt={certificate.name}
              className="object-cover w-full h-full object-top rounded-xl"
              draggable={false}
            />
          </div>
        </SwiperSlide>
      ))}
    </Row>
  );
}
