import { useState } from 'react';
import styled from 'styled-components';
import { Home, Bell, BarChart2, LogOut } from 'lucide-react';

const Nav = styled.nav`
  background-color: #663399;
  height: 100vh;
  width: ${props => props.$isExpanded ? '200px' : '60px'};
  transition: width 0.3s ease;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    min-width: 20px;
  }
`;

const ItemText = styled.span`
  margin-left: 15px;
  opacity: ${props => props.$isExpanded ? 1 : 0};
  white-space: nowrap;
  transition: opacity 0.3s;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Nav $isExpanded={isExpanded}>
      <MenuButton onClick={toggleNavbar}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </MenuButton>

      <NavItem type="button" value='Entrar' onClick={(e) => [e.preventDefault(), window.location.href='/']}>
        <Home size={20} />
        <ItemText $isExpanded={isExpanded}>Home</ItemText>
      </NavItem>

      <NavItem type="button" value='Entrar' onClick={(e) => [e.preventDefault(), window.location.href='/']}>
        <Bell size={20} />
        <ItemText $isExpanded={isExpanded}>Notificações</ItemText>
      </NavItem>

      <NavItem type="button" value='Entrar' onClick={(e) => [e.preventDefault(), window.location.href='/calculadora']}>
        <BarChart2 size={20} />
        <ItemText $isExpanded={isExpanded}>Pedidos</ItemText>
      </NavItem>

      <Spacer />

      <NavItem type="button" value='Entrar' onClick={(e) => [e.preventDefault(), window.location.href='/login-cliente']}>
        <LogOut size={20} />
        <ItemText $isExpanded={isExpanded}>Sair</ItemText>
      </NavItem>
    </Nav>
  );
};

export default Navbar;