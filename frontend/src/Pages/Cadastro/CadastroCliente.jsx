import styled from 'styled-components';
import imgCliente from '../../../public/clienteImg.png'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #f8a4d8 0%, #9c7af0 100%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0px 1000px 1000px 0px;
  
  @media (max-width: 1024px) {
    border-radius: 0px 500px 500px 0px;
    padding: 2rem 1.5rem;
  }
  
  @media (max-width: 768px) {
    border-radius: 0px 0px 100px 100px;
    padding: 2rem 1rem;
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 1024px) {
    padding: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 1rem;
  max-width: 80%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

const LearnMore = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: "→";
    margin-left: 0.5rem;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  width: 100%;
  
  @media (max-width: 768px) {
    margin: 0 auto;
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const Label = styled.label`
  color: #333;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #9c7af0;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const SubmitButton = styled.button`
  background-color: #9c7af0;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #8a69e0;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const LoginLink = styled.a`
  color: #9c7af0;
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: "→";
    margin-left: 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const DeliveryImage = styled.img`
  width: 300px;
  margin-top: 2rem;
  border: none;
  
  @media (max-width: 1024px) {
    width: 250px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    width: 180px;
    margin-top: 1rem;
  }
`;

function Cadastro() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container>
      <LeftPanel>
        <Title>Junte-se a nós!</Title>
        <SubTitle>
          A LAP Informática oferece diversos benefícios e segurança para nossos colaboradores!
        </SubTitle>
        <LearnMore href="#">Saiba mais</LearnMore>
        <DeliveryImage src={imgCliente}alt="Delivery illustration" />
      </LeftPanel>
      
      <RightPanel>
        <Form onSubmit={handleSubmit}>
          <FormTitle>CADASTRO</FormTitle>
          
          <FormGroup>
            <Label>nome:</Label>
            <Input type="text" placeholder="Digite seu nome" />
          </FormGroup>
          
          <FormGroup>
            <Label>email:</Label>
            <Input type="email" placeholder="exemplo@gmail.com" />
          </FormGroup>
          
          <FormGroup>
            <Label>senha:</Label>
            <Input type="password" placeholder="Senha123@" />
          </FormGroup>
          
          <FormGroup>
            <Label>confirme sua senha:</Label>
            <Input type="password" placeholder="Senha123@" />
          </FormGroup>
          
          <SubmitButton type="submit">cadastre-se</SubmitButton>
          
          <LoginLink href="/login-cliente">Já possui uma conta?</LoginLink>
        </Form>
      </RightPanel>
    </Container>
  );
}

export default Cadastro;