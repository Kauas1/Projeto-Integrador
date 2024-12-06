import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgLogin from '../../../public/login.png';

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
  background: linear-gradient(135deg, #f2a1c3 0%, #c89fe8);
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
  color: #00000;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  padding-left: 10rem;

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

const Form = styled.form`
  display: flex;
    font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
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
  color: #00000;
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

const LoginButton = styled.button`
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

const CreateAccount = styled.a`
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
  width: 500px;
  
  margin-top: 0rem;
  margin-left: 5rem;
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

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData?.email === email && userData?.senha === senha) {
      alert('Login realizado com sucesso!');
      navigate('/home'); 
    } else {
      alert('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <Container>
      <LeftPanel>
        <Title>Bem Vindo!</Title>
        <DeliveryImage src={imgLogin} alt="Delivery illustration" />
      </LeftPanel>

      <RightPanel>
        <Form onSubmit={handleSubmit}>
          <FormTitle>LOGIN</FormTitle>

          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>Senha:</Label>
            <Input
              type="password"
              placeholder="Senha123@"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </FormGroup>

          <LoginButton type="submit">Entrar</LoginButton>

          <CreateAccount href="#">Esqueceu a senha?</CreateAccount>
          <CreateAccount href="/cadastro-cliente">Não possui uma conta?</CreateAccount>
        </Form>
      </RightPanel>
    </Container>
  );
}

export default Login;
