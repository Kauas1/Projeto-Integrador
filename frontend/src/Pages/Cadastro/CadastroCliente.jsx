import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgCliente from '../../../public/clienteImg.png';

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
  color: #000000;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

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
  color: #000000;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 1rem;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
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
  padding-left: 120px;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
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
  width: 350px;
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
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Cadastro realizado com sucesso!');
    navigate('/login-cliente');
  };

  return (
    <Container>
      <LeftPanel>
        <Title>Cadastre-se em nosso site! 
        </Title>
        <SubTitle>
        Experiencie um atendimento rápido e eficaz!
        </SubTitle>
        <DeliveryImage src={imgCliente} alt="Delivery illustration" />
      </LeftPanel>

      <RightPanel>
        <Form onSubmit={handleSubmit}>
          <FormTitle>CADASTRO</FormTitle>

          <FormGroup>
            <Label>Nome:</Label>
            <Input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
          </FormGroup>

          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemplo@gmail.com"
            />
          </FormGroup>

          <FormGroup>
            <Label>Senha:</Label>
            <Input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Senha123@"
            />
          </FormGroup>

          <FormGroup>
            <Label>Confirme sua senha:</Label>
            <Input
              type="password"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              placeholder="Senha123@"
            />
          </FormGroup>

          <SubmitButton type="submit">Cadastre-se!</SubmitButton>

          <LoginLink href="/login-cliente">Já possui uma conta?</LoginLink>
        </Form>
      </RightPanel>
    </Container>
  );
}

export default Cadastro;
