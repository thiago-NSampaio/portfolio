import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface RowProps {
  children: ReactNode;
  speed?: number;
}

export function Row({ children, speed = 2500 }: RowProps) {
  return (
    <Swiper
      loop={true} // Garante o loop infinito
      modules={[Autoplay]}
      autoplay={{
        delay: speed, // Tempo entre transições
        disableOnInteraction: false, // Não desabilita ao interagir
        pauseOnMouseEnter: true, // Pausa ao passar o mouse
      }}
      grabCursor={true} // Mostra o cursor de "pegar" para uma melhor UX
      spaceBetween={30} // Espaço entre os itens
      slidesPerView={"auto"} // Ajuste dinâmico do número de slides visíveis
      centeredSlides={true} // Centraliza os slides
    >
      {children}
    </Swiper>
  );
}
