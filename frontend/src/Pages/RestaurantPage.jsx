import { styled } from 'styled-components';
import { breakpoints } from './breakpoints.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';

const Banner = styled.div`
  height: 200px;
  background-image: url("https://wallpapers.com/images/hd/mcdonalds-background-lklrppjq458ohbfj.jpg");
  margin: -30px -20px 20px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 150px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 100px;
  }
`;

const RestaurantName = styled.h2`
  margin: 20px 0;
  padding-left: 3rem;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

const SearchBar = styled.input`
  width: 95%;
  padding: 10px;
  padding-left: 1rem;
  margin-left: 3rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding-left: 4rem;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

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
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  height: 150px;
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
`;

const ProductInfo = styled.div`
  padding: 15px;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

const Price = styled.div`
  color: #4a9c1d;
  margin-top: 10px;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

function RestaurantPage() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Big Mac",
      price: "R$ 35,00",
      image: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br",
    },
    {
      id: 2,
      name: "Quarter Pounder",
      price: "R$ 30,00",
      image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202201_0007-005_QuarterPounderwithCheese_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off",
    },
    {
      id: 3,
      name: "McChicken",
      price: "R$ 25,00",
      image: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kKXGzDAK/200/200/original?country=br",
    },
    {
      id: 4,
      name: "McNuggets",
      price: "R$ 20,00",
      image: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kHXFN6dp/200/200/original?country=br",
    },
  ];

  return (
    <div>
      <Navbar />
      <Banner />
      <RestaurantName>McDonalds - Mdm - Maceió Drive Menino Marcelo</RestaurantName>
      <SearchBar placeholder="Buscar produtos" />
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} onClick={() => navigate('/checkout')}>
            <ProductImage style={{ backgroundImage: `url(${product.image})` }} />
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
