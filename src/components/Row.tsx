import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useMediaQuery } from "react-responsive";
import "swiper/css/navigation";

interface RowProps {
  children: ReactNode;
  speed?: number;
  sb?: number;
}

export function Row({ children, speed = 2500, sb = 30 }: RowProps) {
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
      spaceBetween={sb}
      slidesPerView={"auto"}
      centeredSlides={false}
      className="overflow-visible"
      scrollbar={true}
    >
      {children}
    </Swiper>
  );
}
