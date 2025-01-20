import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { Certificate } from "../types/Certificate";

export function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

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
  const { bg, shadow } = setBackgroundAndShadowByInstitute(certificate.institute);

  return (
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
      <div className="invisible absolute inset-0 bg-gradient-to-tr bg-zinc-800 flex flex-col justify-center rounded-lg items-center z-10 scale-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:visible">
        <span className="text-teal-300 pt-2 text-md font-bold">
          {certificate.name}
        </span>
        <span className="text-zinc-300 pt-2 text-lg font-bold">
          Instituição
        </span>
        <p className={`text-white shadow-lg rounded-2xl font-medium ${bg} ${shadow} p-1.5 px-5`}>
          {certificate.institute}
        </p>
        <span className="text-zinc-300 pt-2 text-lg font-bold">
          Ano de conclusão
        </span>
        <p className="text-white font-medium shadow-lg bg-zinc-600 rounded-2xl shadow-zinc-500 py-1.5 px-4">
          {certificate.year}
        </p>
        <a
          className="flex pt-10 text-white font-medium text-lg hover:text-teal-400"
          href={certificate.link}
          target="_blank"
        >
          Ver Certificado
          <ArrowUpRight />
        </a>
      </div>
    </SwiperSlide>
  );
})}

    </Row>
  );
}
