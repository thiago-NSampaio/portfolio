import { certificates } from "../utils/certifcates";
import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";
import { ArrowUpRight } from "lucide-react";

export function Certificates() {
  return (
    <Row sb={30}>
      {certificates.map((certificate) => (
        <SwiperSlide
          key={certificate.id}
          className="flex flex-shrink-0 group max-w-sm relative overflow-visible"
        >
          <div className="h-72 flex relative z-10">
            <img
              src={certificate.src}
              alt={certificate.name}
              className="object-cover w-full h-full object-top rounded-xl"
              draggable={false}
            />
          </div>
          <div className="invisible absolute inset-0 bg-gradient-to-tr bg-zinc-900 bg-opacity-90 flex flex-col justify-center rounded-lg items-center z-10 scale-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:visible">
            <span className="text-zinc-300 pt-2 text-lg font-bold">
              NLW Pocket Full Stack - Intermediário
            </span>
            <span className="text-zinc-300 pt-2 text-lg font-semibold">
              Instituição
            </span>
            <p className="text-white">Rocketseat</p>
            <span className="text-zinc-300 pt-2 text-lg font-semibold">
              Ano de conclusão
            </span>
            <p className="text-white">2024</p>

            <a
              className="flex pt-10 text-white font-semibold text-lg hover:text-teal-400"
              href="https://alura.com"
              target="_blank"
            >
              Ver Certificado
              <ArrowUpRight />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Row>
  );
}
