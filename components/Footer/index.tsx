import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="w-full bg-globalBg text-white py-16  px-10 px-6 lg:pl-[90px] ">
      <div className="max-w-screen-l mx-auto flex flex-col md:flex-row justify-between  items-center md:items-start lg:items-start">

        {/* Left Section - Contact Info */}
        <div className="text-center md:text-left font-inter font-bold md:w-1/2">
        <div className="flex items-center space-x-4 mb-8">
          <img src="/images/rectangle.png" alt="Decorative" className="w-8 h-1 object-cover rounded-full" />
          <h2 className="text-[2xl]  text-left">Contact us</h2>

        </div>
          <h1 className="text-[40px] font-bold mb-4">
            Have a project in mind? <br />
            Let's make it happen
          </h1>
        </div>

        {/* Right Section - Address */}
        <address className=" not-italic font-interRegular text-[20px] text-center lg:pr-[150px] md:text-right md:w-1/2 mt-10">
          22 Street Name, Suburb, 8000, <br />
          Cape Town, South Africa <br />
          <a href="tel:+27214310001" className="block">
            +27 21 431 0001
          </a>
          <a
            href="mailto:enquire@website.co.za"
            className="block text-pink-500"
          >
            enquire@website.co.za
          </a>
        </address>
      </div>

      <div className="max-w-screen-l mx-auto mt-10 grid grid-cols-2 text-[20px] font-interRegular  md:grid-cols-5 gap-6 text-center md:text-left ">
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Terms of service</a></li>
          <li><a href="#" className="hover:underline">Privacy policy</a></li>
          <li><a href="#" className="hover:underline">Impressum</a></li>
        </ul>

        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Facebook</a></li>
          <li><a href="#" className="hover:underline">Instagram</a></li>
          <li><a href="#" className="hover:underline">Twitter</a></li>
        </ul>

        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Github</a></li>
          <li><a href="#" className="hover:underline">LinkedIn</a></li>
          <li><a href="#" className="hover:underline">Teams</a></li>
        </ul>

        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">YouTube</a></li>
          <li><a href="#" className="hover:underline">Behance</a></li>
          <li><a href="#" className="hover:underline">Dribbble</a></li>
        </ul>

        <div className="flex flex-col items-center lg:pr-[150px] ">
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Explore open jobs</a></li>
          </ul>
          <p className="mt-6 ">&copy; 2000—2023 Company Name</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;