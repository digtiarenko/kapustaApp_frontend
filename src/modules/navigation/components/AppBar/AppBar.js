import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Container from '../Container';

export default function AppBar() {
  return (
    <>
      <Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}
