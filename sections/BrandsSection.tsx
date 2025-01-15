import React, { useState, useEffect } from 'react';

interface Brand {
  id: number;
  name: string;
  image_url: string;
  published: boolean;
}

const Brands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterPublished, setFilterPublished] = useState<boolean | null>(null);
  const [selectedBrandId, setSelectedBrandId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error state


  useEffect(() => {
    fetch('http://localhost:5000/brands')
      .then((response) => response.json())
      .then((data) => {
        setBrands(data);
        setFilteredBrands(data);
        setErrorMessage(null); 

      })
      .catch((error) => {
        setErrorMessage(error.message); 
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    let updatedBrands = [...brands];

    if (filterPublished !== null) {
      updatedBrands = updatedBrands.filter(brand => brand.published === filterPublished);
    }

    updatedBrands.sort((a, b) => {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });

    setFilteredBrands(updatedBrands);
  }, [brands, sortOrder, filterPublished]);

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
  };

  const handleFilterChange = (value: boolean | null) => {
    setFilterPublished(value);
  };

  return (
    <div className="lg:pl-[90px] mb-8">
      <div className="flex items-center space-x-4 mb-10">
        <img src="/images/rectangle.png" alt="Decorative" className="w-8 h-1 object-cover rounded-full" />
        <h2 className="text-[2xl] text-[#000000] font-inter font-bold text-left">You'll be in good company</h2>
      </div>
      <h1 className="text-[#000000] font-inter font-bold text-[48px] rounded-[15px]">Trusted by leading brands</h1>

      {errorMessage && (
        <div className="text-[#000000] font-inter font-bold text=[20px] mt-4">
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="filters">
        <div className="flex space-x-4 font-inter font-semibold text-[#000000]">
          <button onClick={() => handleSortChange('asc')} className="border px-4 py-2">Sort A-Z</button>
          <button onClick={() => handleSortChange('desc')} className="border px-4 py-2">Sort Z-A</button>
          <button onClick={() => handleFilterChange(true)} className="border px-4 py-2">Published</button>
          <button onClick={() => handleFilterChange(false)} className="border px-4 py-2">Unpublished</button>
          <button onClick={() => handleFilterChange(null)} className="border px-4 py-2">All</button>
        </div>
      </div>

      <div className="grid-container">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            className={`brand-item ${selectedBrandId === brand.id ? 'selected' : ''}`}
            onClick={() => setSelectedBrandId(brand.id)}
          >
            <img
              className="brand-image"
              src={`http://localhost:5000/${brand.image_url}`} 
              alt={brand.name}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .brands-container {
          padding: 45px;
          background: white;

        }

        .filters {
          margin-bottom: 20px;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr); 
          grid-template-rows: auto;
          gap: 40px;
        }

        .brand-item {
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: border 0.3s ease;
        }

        .brand-item.selected {
          border: 3px solid var(--globalBg); 
          border-radius: 10px;
        }

        .brand-image {
          width: 256px;
          height: 200px;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr; 
            gap: 25px;
          }

          .brand-image {
            width: calc(100% - 20px); 
            height: auto;
            margin-left: 15px; 
            margin-right: 15px; 
          }
        }
      `}</style>
    </div>
  );
};

export default Brands;
