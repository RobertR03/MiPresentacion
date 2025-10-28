import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from '../ui/ThemeToggle';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  min-height: calc(100vh - 200px);
`;

const Layout = () => {
  return (
    <>
      <Main>
        <Header />
        <Outlet />
      </Main>
      <Footer />
      <ThemeToggle />
    </>
  );
};

export default Layout;