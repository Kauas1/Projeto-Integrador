import { styled } from "styled-components";
import { breakpoints } from "../breakpoints.js";

const HeaderContainer = styled.header`
  padding: 15px 20px;
  background-color: white;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 8px 15px;
  border: 1px solid #ddd;
  margin-left: 55rem;
  border-radius: 4px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const Location = styled.span`
  font-size: 14px;
  color: #333;
  padding-left: 2rem;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

function Headerr() {
  return (
    <HeaderContainer>
      <Location>R. Exemplo da Rua, 00</Location>
      <SearchInput placeholder="Pesquisar (restaurante, comida, etc...)" />
    </HeaderContainer>
  );
}

export default Headerr;
