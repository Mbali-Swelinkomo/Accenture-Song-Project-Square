import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BrandsSection from "./BrandsSection";
import { ServiceCard, CaseStudyCard } from "@/components";

const services = [
  { icon: "/images/DevIcon.png", title: "Web development", description: "We use cutting-edge web development technologies to help our clients achieve their business goals." },
  { icon: "/images/UXIcon.png", title: "User experience & design", description: "Our complete web design services will bring your ideas to life and provide a high-performing product." },
  { icon: "/images/AppIcon.png", title: "Mobile app development", description: "We create custom native and cross-platform iOS and Android mobile solutions for our clients." },
  { icon: "/images/icon.png", title: "Blockchain solutions", description: "We conduct market research to determine the optimal blockchain-based solutions for your business growth." }
];

const caseStudies = [
  { image: "/images/card1.png", title: "The Olympian", description: "The only athlete in the world to do her \n Olympic routine in 2020." },
  { image: "/images/card2.png", title: "The Savings Jar", description: "Grow your savings treasure and grow your \n dragon." },
  { image: "/images/card3.png", title: "Skhokho seMali", description: "Helping South Africans become #CashCleva \n with Skhokho and TymeBank." }
];

const HomePageMainSection: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen w-full bg-cover bg-center relative bg-[url('/images/hero.jpeg')]">
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white z-10 px-6 lg:pl-[90px]">
          <h1 className="text-[70px] font-bold font-inter mb-3">Live with Confidence</h1>
          <p className="text-[20px] font-interRegular mt-2 mb-3">José Mourinho brings confidence to pan-African Sanlam campaign.</p>
          <button className="mt-4 px-6 py-2 bg-globalBg font-interRegular text-white rounded-[25px]">View project</button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6 bg-white lg:pl-[90px]">
        <div className="flex items-center space-x-4 mb-8">
          <img src="/images/rectangle.png" alt="Decorative" className="w-8 h-1 object-cover rounded-full" />
          <h2 
                className="text-2xl text-[#000000] font-inter font-bold text-left"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
              >
                What we do
              </h2>


        </div>
        <h1 className="text-[#000000] font-inter font-bold text-[48px] " style={{ textShadow: '2px 2px 3px rgba(0, 0, 1, 1)' }}>
          We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces.
        </h1>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white lg:pl-[90px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-16 px-6 bg-white lg:pl-[90px]">
        <div className="flex items-center space-x-4 mb-8">
          <img src="/images/rectangle.png" alt="Decorative" className="w-8 h-1 object-cover rounded-full" />
          <h2 className="text-2xl text-[#000000] font-inter font-bold text-left">Case studies</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10} 
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="w-full"
        >
          {caseStudies.map((study) => (
            <SwiperSlide key={study.title}>
              <CaseStudyCard {...study} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <BrandsSection />
    </>
  );
};

export default HomePageMainSection;
