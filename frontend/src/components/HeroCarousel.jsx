import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      title: "Latest Electronics",
      subtitle: "Upgrade your lifestyle with top-selling gadgets",
      button: "Shop Now"
    },
    {
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
      title: "New Fashion Trends",
      subtitle: "Big discounts on your favourite brands",
      button: "Explore Collection"
    },
    {
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "Smart Home Essentials",
      subtitle: "Your modern home starts here",
      button: "Discover Deals"
    }
  ];

  return (
    <div className="relative w-full h-64 md:h-[380px] lg:h-[430px] xl:h-[480px] rounded-xl overflow-hidden shadow-lg">

      {/* CUSTOM DESKTOP ARROWS */}
      <button
        className="
          custom-prev hidden md:flex
          absolute left-3 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full bg-white shadow-lg
          items-center justify-center text-lg font-bold
          hover:scale-105 transition z-50
        "
      >
        ‹
      </button>

      <button
        className="
          custom-next hidden md:flex
          absolute right-3 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full bg-white shadow-lg
          items-center justify-center text-lg font-bold
          hover:scale-105 transition z-50
        "
      >
        ›
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            
            {/* IMAGE */}
            <img
              src={slide.image}
              alt="banner"
              className="
                w-full h-64 md:h-[380px] lg:h-[430px] xl:h-[480px]
                object-cover md:object-contain
                bg-black
              "
            />

            {/* GRADIENT + TEXT */}
            <div className="
              absolute inset-0
              bg-gradient-to-r from-black/60 via-black/30 to-transparent
              flex items-center px-6 md:px-16 text-white
            ">
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-4xl font-extrabold">{slide.title}</h2>
                <p className="mt-2 md:mt-3 text-sm md:text-lg opacity-90">{slide.subtitle}</p>

                <button
                  className="
                    mt-4 md:mt-6 bg-white text-black 
                    px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold 
                    hover:scale-105 transition shadow-md
                  "
                >
                  {slide.button}
                </button>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default HeroCarousel;
