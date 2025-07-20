import { Container } from './components/Container';
import { Logo } from './components/Logo';

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <section>MENU</section>
      </Container>

      <Container>
        <section>FORM</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
