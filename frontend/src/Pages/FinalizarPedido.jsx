import { styled } from 'styled-components';
import Navbar from '../Components/Navbar.jsx'


const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
`;

const Section = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  padding-left: 3rem;
  margin-bottom: 20px;
`;

const Address = styled.div`
  margin: 15px 0;
  color: #666;
`;

const DeliveryTime = styled.div`
  display: flex;
  gap: 20px;
  margin: 15px 0;
`;

const TimeOption = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  text-align: center;
`;

const AddCard = styled.button`
  width: 100%;
  padding: 15px;
  border: 2px dashed #4a1d6e;
  background: none;
  border-radius: 8px;
  color: #4a1d6e;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  
  &:hover {
    background: #f5f0f9;
  }
`;

const OrderSummary = styled.div`
  position: sticky;
  top: 20px;
`;

function CheckoutPage() {
  return (
    <div>
      
    <Navbar />
      <Title>Finalize seu pedido</Title>
      <CheckoutContainer>
        <div>
          <Section>
            <h3>Entrega</h3>
            <Address>
              R. El Chaquito e Dois, 219
              Maceió/AL
            </Address>
            <DeliveryTime>
              <TimeOption>
                <div>Hoje</div>
                <div>26-36 min</div>
                <div>R$ 8,99</div>
              </TimeOption>
              <TimeOption>
                <div>Hoje</div>
                <div>40-50 min</div>
                <div>R$ 5,99</div>
              </TimeOption>
            </DeliveryTime>
          </Section>
          
          <Section>
            <h3>Pagamento</h3>
            <AddCard>
              <span>💳</span>
              Adicionar novo cartão
            </AddCard>
          </Section>
        </div>

        <OrderSummary>
          <Section>
            <h3>Seu pedido em</h3>
            <p>McDonalds - Mdm - Maceió Drive</p>
            <hr />
            <div>
              <p>1x Family Box Premium 2</p>
              <p>R$ 75,00</p>
            </div>
            <hr />
            <div>
              <strong>Total</strong>
              <strong>R$ 75,00</strong>
            </div>
          </Section>
        </OrderSummary>
      </CheckoutContainer>
    </div>
  );
}

export default CheckoutPage;