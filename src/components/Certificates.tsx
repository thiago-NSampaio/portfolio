import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Certificate } from "../types/Certificate";


export function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    api
      .get("/certificates")
      .then((res) => {
        setCertificates(res.data);
      })
      .catch((error) => {
        console.error("Error fetching certificates:", error);
      });
  }, []);

  return (
    <Row sb={30}>
      {certificates.map((certificate) => (
        <SwiperSlide
          key={certificate.id}
          className="flex flex-shrink-0 group max-w-sm relative overflow-visible"
        >
          <div className="h-72 flex z-10">
            <img
              src={certificate.img}
              alt={certificate.name}
              className="object-cover p-2 w-full h-full object-top rounded-xl"
              draggable={false}
            />
          </div>
          <div className="invisible absolute inset-0 bg-gradient-to-tr bg-zinc-800  flex flex-col justify-center rounded-lg items-center z-10 scale-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:visible">
            <span className="text-teal-500 pt-2 text-md font-bold">
              {certificate.name}
            </span>
            <span className="text-zinc-300 pt-2 text-lg font-semibold">
              Instituição
            </span>
            <p className="text-white">{certificate.institute}</p>
            <span className="text-zinc-300 pt-2 text-lg font-semibold">
              Ano de conclusão
            </span>
            <p className="text-white">{certificate.year}</p>
            <a
              className="flex pt-10 text-white font-semibold text-lg hover:text-teal-400"
              href={certificate.link}
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
