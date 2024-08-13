import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Brand from '#/shared/brand/brand.tsx';
import NetworkConnectivity from '#/shared/network-connectivity/networkConnectivity.tsx';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import NavbarContext from '#/core/layout/navbarContext';

const Layout = () => {
  const navbarContentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="h-100 w-100 d-flex flex-column">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <Brand />
            <div className="ms-2">
              <div ref={navbarContentRef}></div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-2">
              <NetworkConnectivity />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="flex-grow-1 overflow-auto">
        <NavbarContext.Provider value={{ centerContentRef: navbarContentRef }}>
          <Outlet />
        </NavbarContext.Provider>
      </Container>
    </div>
  );
};

export default Layout;
