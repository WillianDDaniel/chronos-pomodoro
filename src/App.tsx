import { Container } from "./components/Container/Container"
import { Heading } from "./components/Heading/Heading";

export default function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <section>
          MENU
        </section>
      </Container>

      <Container>
        <section>
          FORM
        </section>
      </Container>

      <Container>
        <section>
          FOOTER
        </section>
      </Container>
    </>
  );
}
