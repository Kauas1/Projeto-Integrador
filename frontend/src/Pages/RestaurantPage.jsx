import { styled } from 'styled-components';
import { breakpoints } from './breakpoints.js'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';

const Banner = styled.div`
  height: 200px;
  background: linear-gradient(to right, #ff0000, #ff4400);
  margin: -20px -20px 20px;
  
  @media (max-width: ${breakpoints.tablet}) {
    height: 150px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    height: 100px;
  }
`;

const RestaurantName = styled.h2`
  margin: 20px 0;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.div`
  height: 150px;
  background-color: #f0f0f0;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const Price = styled.div`
  color: #4a9c1d;
  margin-top: 10px;
`;

function RestaurantPage() {
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: "Big Mac", price: "R$ 35,00" },
    { id: 2, name: "Quarter Pounder", price: "R$ 30,00" },
    { id: 3, name: "McChicken", price: "R$ 25,00" },
    { id: 4, name: "McNuggets", price: "R$ 20,00" },
  ];



  return (
    <div>
      <Navbar />
      <Banner />
      <RestaurantName>McDonalds - Mdm - Maceió Drive Menino Marcelo</RestaurantName>
      <SearchBar placeholder="Buscar produtos" />
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id} onClick={() => navigate('/checkout')}>
            <ProductImage />
            <ProductInfo>
              <h3>{product.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <Price>A partir de {product.price}</Price>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </div>
  );

  
}

export default RestaurantPage;