import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

interface RowProps {
  children: ReactNode;
  speed?: number;
}

export function Row({ children, speed = 2500 }: RowProps) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <Swiper
      loop={false}
      modules={[Autoplay]}
      autoplay={{
        delay: speed,
        disableOnInteraction: isMobile,
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
