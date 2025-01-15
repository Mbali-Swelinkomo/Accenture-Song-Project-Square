interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="flex flex-col items-start text-[#000000] font-inter font-bold ">
      <img src={icon} alt={title} className="w-10 h-10 rounded-lg" />
      <h3 className="mt-4 font-extrabold text-[24px] text-left " style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 1)' }}>{title}</h3>
      <p className="mt-2 text-[20px] text-left" style={{ textShadow: '2px 2px 3px rgba(0, 0, 1, 1)' }}>{description}</p>
    </div>
  );
  
  export default ServiceCard;
  