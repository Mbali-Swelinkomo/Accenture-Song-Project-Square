import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1, // Change to 1 item per slide for larger screens
    partialVisibilityGutter: 120,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1, // 1 item per slide on desktops
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1, // 1 item per slide on tablets
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1, // 1 item per slide on mobile
  },
};

const HomeProductCarousel: React.FC = () => {
  return (
    <div className="w-full">
      <Carousel
        infinite={true}
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={3000} // Auto play speed in ms
        pauseOnHover={true} // Pause on hover
        partialVisible={true}
        responsive={responsive}
        itemClass="px-2"
      >
        {/* Case Studies Section as a Slider */}
        <section className="py-16 px-6 bg-white w-full">
          <img
            src="/images/rectangle.png"
            alt="Small Image 2"
            className="w-6 h-4 object-cover rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold text-left mb-8">Case Studies</h2>
          <div className="relative">
            <img
              src="/images/card1.png"
              alt="Case Study 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
              <img
                src="/images/rectangle.png"
                alt="Small Image 2"
                className="w-6 h-4 object-cover rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold text-white">The Olympian</h3>
              <p className="text-[13px] text-white mt-2">
                The only athlete in the world to do her Olympic routine in 2020.
              </p>
            </div>
          </div>

          {/* Add more Case Studies in the carousel */}
          <div className="relative">
            <img
              src="/images/card2.png"
              alt="Case Study 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
              <img
                src="/images/rectangle.png"
                alt="Small Image 2"
                className="w-6 h-4 object-cover rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold text-white">The Savings Jar</h3>
              <p className="text-[13px] text-white mt-2">
                Grow your savings treasure and grow your dragon.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/card3.png"
              alt="Case Study 3"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
              <img
                src="/images/rectangle.png"
                alt="Small Image 2"
                className="w-6 h-4 object-cover rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold text-white">Skhokho seMali</h3>
              <p className="text-[13px] text-white mt-2">
                Helping South Africans become #CashCleva with Skhokho and TymeBank.
              </p>
            </div>
          </div>
        </section>
      </Carousel>
    </div>
  );
};

export default HomeProductCarousel;
