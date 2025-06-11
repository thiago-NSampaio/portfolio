import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";
import { SquareArrowUpRight, Info, X } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Certificate } from "../types/Certificate";

export function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  function setBackgroundAndShadowByInstitute(institute: string) {
    switch (institute) {
      case "Alura":
        return {
          bg: "bg-[#0e98b0]",
          shadow: "shadow-[#2BDEFD]",
        };
      case "Rocketseat":
        return {
          bg: "bg-[#781ee8]",
          shadow: "shadow-[#8234E4]",
        };
      default:
        return {
          bg: "bg-gray-500",
          shadow: "shadow-gray-400",
        };
    }
  }

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
      {certificates.map((certificate) => {
        const { bg, shadow } = setBackgroundAndShadowByInstitute(
          certificate.institute
        );

        return (
          <SwiperSlide
            key={certificate.id}
            className="flex flex-shrink-0 group max-w-sm overflow-visible"
          >
            <div className="h-72 flex z-10 relative">
              <img
                src={certificate.img}
                alt={certificate.name}
                className="object-cover p-2 w-full h-full object-top rounded-xl"
                draggable={false}
              />
              <button
                onClick={() => setSelectedCertificate(certificate.id)}
                className="absolute top-3 right-3 p-2 rounded-full"
              >
                <Info className="w-7 h-7 bg-zinc-950/80 rounded-full text-white md:w-6 md:h-6" />
              </button>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-tr bg-zinc-800 flex flex-col justify-center rounded-lg items-center z-10 transition duration-300
              ${
                selectedCertificate === certificate.id
                  ? "visible opacity-100 scale-100"
                  : "invisible opacity-0 scale-0"
              }`}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-1 right-1 p-2 rounded-full"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <span className="text-orange-500 pt-2 text-md font-bold">
                {certificate.name}
              </span>
              <span className="text-zinc-300 pt-2 text-lg font-bold">
                Instituição
              </span>
              <p
                className={`text-white shadow-lg rounded-2xl font-medium ${bg} ${shadow} p-1.5 px-5`}
              >
                {certificate.institute}
              </p>
              <span className="text-zinc-300 pt-2 text-lg font-bold">
                Ano de conclusão
              </span>
              <p className="text-white font-medium shadow-lg bg-zinc-600 rounded-2xl shadow-zinc-500 py-1.5 px-4">
                {certificate.year}
              </p>
              <a
                className="flex pt-5 text-white font-medium text-lg gap-1 hover:text-orange-200"
                href={certificate.link}
                target="_blank"
              >
                Ver Certificado
                <SquareArrowUpRight />
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Row>
  );
}
