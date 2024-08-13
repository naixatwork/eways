import Navbar from 'react-bootstrap/esm/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Brand from '#/shared/brand/brand.tsx';
import NetworkConnectivity from '#/shared/network-connectivity/networkConnectivity.tsx';

const AuthLayout = () => {
  return (
    <div className="h-100 w-100 d-flex flex-column">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <Brand />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-2">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <NetworkConnectivity />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="flex-grow-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
