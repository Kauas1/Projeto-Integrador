import styled from 'styled-components';
import Headerr from '../Pages/Home/Headerr.jsx';
import Navbar from './Components/Navbar.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const TableCard = styled.div`
  background-color: #ffc0cb;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
`;

const TableRow = styled.tr`
  background-color: #9c27b0;
  &:nth-child(odd) {
    background-color: #ab47bc;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  color: white;
  border: 1px solid #ba68c8;
`;

const TableHeader = styled.th`
  padding: 1rem;
  color: white;
  border: 1px solid #ba68c8;
  background-color: #8e24aa;
  text-align: left;
`;

const Button = styled.button`
  background-color: #9c27b0;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #7b1fa2;
  }
`;

const TabelaPreco = () => {
  return (
    <Container>
      <Headerr/>
      <Navbar />
      <TableCard>
        <Title>Tabela de Valor por Peso</Title>
        <Table>
          <thead>
            <tr>
              <TableHeader>Peso da Mercadoria</TableHeader>
              <TableHeader>Valor</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Menos de 1Kg</TableCell>
              <TableCell>R$3,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Entre 1Kg a 3Kg</TableCell>
              <TableCell>R$5,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Entre 3Kg a 8Kg</TableCell>
              <TableCell>R$9,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Entre 8Kg a 12Kg</TableCell>
              <TableCell>R$12,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Acima de 12Kg</TableCell>
              <TableCell>Não é possível transportar</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Button onClick={() => window.history.back()}>
          Voltar para a Calculadora
        </Button>
      </TableCard>
    </Container>
  );
};

export default TabelaPreco;