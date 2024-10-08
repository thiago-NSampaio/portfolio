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
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: speed,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      grabCursor={true}
      spaceBetween={30}
      slidesPerView={"auto"}
      centeredSlides={false}
    >
      {children}
    </Swiper>
  );
}
