import { BrowserRouter, Routes, Route } from "react-router-dom";
import { breakpoints } from "./Pages/breakpoints.js";
import HomePage from "./Pages/Home/HomePage.jsx";
import RestaurantPage from "./Pages/RestaurantPage.jsx";
import CheckoutPage from "./Pages/FinalizarPedido.jsx";
import CadastroCliente from "./Pages/Cadastro/CadastroCliente.jsx";
import CadastroEmpresa from "./Pages/Cadastro/CadastroEmpresa.jsx";
import CadastroMotoboy from "./Pages/Cadastro/CadastroMotoboy.jsx";
import LoginCliente from "./Pages/login/LoginCliente.jsx";
import LoginEmpresa from "./Pages/login/LoginEmpresa.jsx";
import LoginMotoboy from "./Pages/login/LoginMotoboy.jsx";
import { styled } from "styled-components";
import Calculadora from "./Components/Calculadora.jsx";
import StarRatingModal from "./Components/ModalAvaliation.jsx";
import FeedbackModal from "./Components/ModalSucess.jsx";
//import Headerr from "./Pages/Home/Headerr.jsx";
//import Navbar from "./Components/Navbar.jsx";

const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  padding: 20px;
  flex: 1;
  background-color: #f5f5f5;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }
`;

function App() {
  return (
    <>
    <BrowserRouter>
      <AppLayout>
        <MainContent>
          {/* <Navbar/>
          <Headerr/> */}
          <ContentArea>
            <Routes>
              <Route path="/confirmacao" element={<FeedbackModal />} />
              <Route path="/avaliacao" element={<StarRatingModal />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurant/:id" element={<RestaurantPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/calculadora" element={<Calculadora />} />
              <Route path="/cadastro-cliente" element={<CadastroCliente />} />
              <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
              <Route path="/cadastro-motoboy" element={<CadastroMotoboy />} />
              <Route path="/login-cliente" element={<LoginCliente />} />
              <Route path="/login-empresa" element={<LoginEmpresa />} />
              <Route path="/login-motoboy" element={<LoginMotoboy />} />
            </Routes>
          </ContentArea>
        </MainContent>
      </AppLayout>
    </BrowserRouter>
    </>
  );
}

export default App;
