import { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Clock, Package } from 'lucide-react';
import Navbar from './Navbar';
import ilustracao from '../../public/ilustracao.png'
import mapa from '../../public/mapa.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

const CalculatorCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LeftPanel = styled.div`
  background-color: #ffc0cb;
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightPanel = styled.div`
  background-color: #ffd7e6;
  padding: 2rem;
  flex: 1;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;

  svg {
    margin-right: 8px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const MapContainer = styled.div`
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  height: 300px;
  background-color: #eee;
`;

const ResultContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
`;

const Button = styled.button`
  background-color: #9c27b0;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #7b1fa2;
  }
`;

const InfoButton = styled.button`
  background-color: transparent;
  color: #9c27b0;
  border: 1px solid #9c27b0;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 1rem;
  transition: all 0.2s;

  &:hover {
    background-color: #9c27b0;
    color: white;
  }
`;

const Calculadora = () => {
  const [weight, setWeight] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [total, setTotal] = useState(null);

  const calculatePrice = () => {
    // Cálculo do valor por peso
    let weightPrice = 0;
    const weightNum = parseFloat(weight);
    if (weightNum < 1) weightPrice = 3;
    else if (weightNum <= 3) weightPrice = 5;
    else if (weightNum <= 8) weightPrice = 9;
    else if (weightNum <= 12) weightPrice = 12;
    else {
      alert('Não é possível transportar mercadorias acima de 12Kg');
      return;
    }

    // Cálculo do valor por distância
    const distancePrice = parseFloat(distance) * 0.50;

    // Cálculo do valor por tempo
    const timePrice = parseFloat(time) * 0.30;

    // Cálculo do total
    const totalPrice = weightPrice + distancePrice + timePrice;
    setTotal(totalPrice);
  };

  return (
    <Container>
      <Navbar />
      <CalculatorCard>
        <LeftPanel>
          <Title>Calculadora de Entregas</Title>
          <div style={{ flex: 1 }}>
            <img 
              src ={ilustracao}
              // src="/api/placeholder/400/300"
              alt="Ilustração de calculadora"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </LeftPanel>

        <RightPanel>
          <FormGroup>
            <Label>
              <Package size={20} />
              Peso da Mercadoria
            </Label>
            <Select value={weight} onChange={(e) => setWeight(e.target.value)}>
              <option value="">Selecione o peso</option>
              <option value="0.5">Menos de 1Kg</option>
              <option value="2">Entre 1Kg a 3Kg</option>
              <option value="5">Entre 3Kg a 8Kg</option>
              <option value="10">Entre 8Kg a 12Kg</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>
              <MapPin size={20} />
              Distância Percorrida (Km)
            </Label>
            <Input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Digite a distância"
            />
          </FormGroup>

          <FormGroup>
            <Label>
              <Clock size={20} />
              Tempo de Deslocamento (min)
            </Label>
            <Input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Digite o tempo"
            />
          </FormGroup>

          <MapContainer>
            <img 
              src={mapa}
              alt="Mapa"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </MapContainer>

          <Button onClick={calculatePrice}>Calcular Preço</Button>

          {total && (
            <ResultContainer>
              <h3>Valor Total: R$ {total.toFixed(2)}</h3>
            </ResultContainer>
          )}

          <InfoButton onClick={() => window.location.href = '/tabela-precos'}>
            Ver Tabela de Preços
          </InfoButton>
        </RightPanel>
      </CalculatorCard>
    </Container>
  );
};

export default Calculadora;