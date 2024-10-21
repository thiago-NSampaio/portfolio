import { certificates } from "../utils/certifcates";
import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";

export function Certificates() {
  return (
    <Row>
      {certificates.map((certificate) => (
        <SwiperSlide
          key={certificate.id}
          className="flex max-w-sm overflow-hidden"
        >
          <div className="rounded-xl h-72 flex">
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
